import { combineReducers } from "redux";
import Auth from './Auth'
import Data from './Data'

const reducers = combineReducers({
  Auth,
  Data
})

export default reducers