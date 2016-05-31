/**
 *  Auth util
 */

export default function (nextState, replace) {
  const nextPathname = nextState.location.pathname;
  // const { dispatch, getState } = this.store;

  console.log('Auth Util', nextState, nextPathname);
};
