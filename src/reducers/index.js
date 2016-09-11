import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import * as HomeReducer from './HomeReducer'

const {
  counter
} = HomeReducer

let asyncReducers = {}

export function registerNewReducers (newReducerObj) {
  asyncReducers = Object.assign(asyncReducers, newReducerObj)
}

export default function rootReducer () {
  const initialReducers = {
    counter: counter,
    routing: router
  }
  var reducersObj = Object.assign(initialReducers, asyncReducers)
  return combineReducers(reducersObj)
}
