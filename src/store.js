import { createStore } from "redux"
import rootReducer from "./services/Reducers/combineReducers"

const Store = createStore(rootReducer)

export default Store