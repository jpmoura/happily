import { combineReducers } from 'redux';
import happyHourSettings from './ducks/happyHourSettings';
import people from './ducks/people';

export default combineReducers({
  people,
  happyHourSettings,
});
