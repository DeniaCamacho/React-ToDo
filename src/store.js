import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

//import reducers
import listReducer from "./reducers/listReducer"

//combine reducers into single obj
const rootReducer = combineReducers({
  listReducer
})

//export that obj which is our store
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
