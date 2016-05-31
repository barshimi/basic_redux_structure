import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Auth from 'utils/Auth';
import 'styles/_globals.scss';

export default (store) => {
  return (
    <Route path='/'>
      <IndexRedirect to='home' />
      <Route path='home' store={store} component={require('react-router-proxy?name=home!views/HomeView')} onEnter={Auth} />
      <Route path='*' component={require('react-router-proxy?name=all!views/ForbiddenView')} status={404} />
    </Route>
  );
};
