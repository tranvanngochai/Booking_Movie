import {combineReducers} from 'redux';
import filmReducer from './filmReducer'
import cinemaReducer from './cinemaReducer'
import userReducer from './userReducer'
import bookingReducer from './bookingReducer'

const rootReducer = combineReducers({
  filmReducer,
  cinemaReducer,
  userReducer,
  bookingReducer,
});

export default rootReducer;