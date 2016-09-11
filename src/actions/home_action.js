'use strict'
 /**
 *  home actions
 */
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE = 'COUNTER_DOUBLE'

export const homeActionCreators = {
  incrementCounter: (value) => ({type: COUNTER_INCREMENT, payload: value}),
  doubleIncrement: (value) => ({type: COUNTER_DOUBLE, payload: value})
}
