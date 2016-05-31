'use strict';
/**
 *  Home Reducer
 */
import { createReducer } from 'utils';
import {
  COUNTER_INCREMENT,
  COUNTER_DOUBLE
} from 'actions/home_action';

const InitialState = {
  counter: 0
};

export const counter = createReducer(InitialState.counter, {
  [COUNTER_INCREMENT]: (state, payload) => payload,
  [COUNTER_DOUBLE]: (state, payload) => payload
});
