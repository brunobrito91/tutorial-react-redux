import * as actionType from '../actiontypes/students';
import * as dataSource from '../../dataSource/requests';
import { startLoading, finishLoading } from './communication';

const GET_POSTS_URL = '/students';

export const updateStudents = students => ({
  type: actionType.UPDATE_STUDENTS,
  payload: students,
});

export function onFetchStudents(id) {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const students = await dataSource.get(GET_POSTS_URL, id);
      dispatch(finishLoading());
      dispatch(updateStudents(students));
    } catch (exception) {
      console.error(`actions/fetchStudents -> ${exception}`);
      dispatch(finishLoading());
    }
  };
}
