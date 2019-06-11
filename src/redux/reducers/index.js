import { combineReducers } from 'redux';

import communication from './communication';
import posts from './posts';
import students from './students';

const appReducer = combineReducers({
  communication,
  posts,
  students,
});

export default function (state, action = {}) {
  return appReducer(state, action);
}
