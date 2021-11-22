import { combineReducers } from "redux"
import Auth from "./Auth"
import Data from "./Data"
import Message from "./Message"
import Profile from "./Profile"
import History from "./History"
import manageHistory from "./manageHistory"
import Status from "./Status"

const reducers = combineReducers({
	Auth,
	Data,
	Message,
	Profile,
	History,
	manageHistory,
	Status,
})

export default reducers
