import { combineReducers } from "redux"
import Auth from "./Auth"
import Data from "./Data"
import Message from "./Message"
import Profile from "./Profile"
import History from "./History"
import manageHistory from "./manageHistory"
import Status from "./Status"
import manageRequest from "./manageRequest"
import Request from "./Request"

const reducers = combineReducers({
	Auth,
	Data,
	Message,
	Profile,
	History,
	manageHistory,
	Status,
	manageRequest,
	Request,
})

export default reducers
