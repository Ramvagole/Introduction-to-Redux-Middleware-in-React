import {legacy_createStore,applyMiddleware} from "redux"
import {logger} from "redux-logger"
import { reducer } from "./Reducer"
export let store=legacy_createStore(reducer,applyMiddleware(logger))


