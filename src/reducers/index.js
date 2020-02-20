import { combineReducers } from 'redux';
import listReducer from './listReducer';
import detailReducer from './detailReducer';
const rootReducer = combineReducers({
  list_data:listReducer,
  detail_data:detailReducer
});

export default rootReducer;