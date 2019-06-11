import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onFetchStudents } from '../../redux/actions/students';

class Home extends Component {
  static propTypes = {
    students: PropTypes.objectOf(PropTypes.any),
    onFetchStudents: PropTypes.func.isRequired,
  };

  static defaultProps = {
    students: {},
  };

  componentWillMount() {
    this.props.onFetchStudents();
  }

  renderStudents = () => {
    const posts = this.props.students.ids.map(id => (
      <div key={id}>
        <h3>{this.props.students.content[id].name}</h3>
        <hr />
      </div>
    ));
    return posts;
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Students</h1>
        {this.renderStudents()}
      </div>
    );
  }
}

const mapStateToProps = ({ students }) => ({
  students,
});

const mapDispatchToProps = {
  onFetchStudents,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
