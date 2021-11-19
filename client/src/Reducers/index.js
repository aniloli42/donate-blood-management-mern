import { combineReducers } from "redux"
import Auth from "./Auth"
import Data from "./Data"
import Message from "./Message"
import Profile from "./Profile"

const reducers = combineReducers({
	Auth,
	Data,
	Message,
	Profile,
})

export default reducers
