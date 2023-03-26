import { combineReducers } from "redux"
import Reducer from "./reducer"
import FinaleReducer from "./finalReducer"
import SingleReducer from "./SingleReducer"

const rootReducer = combineReducers({
    Reducer, FinaleReducer, SingleReducer
})

export default rootReducer