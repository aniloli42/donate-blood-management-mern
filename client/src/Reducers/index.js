import { combineReducers } from "redux"
import Auth from "./Auth"
import Data from "./Data"
import Message from "./Message"

const reducers = combineReducers({
	Auth,
	Data,
	Message,
})

export default reducers
