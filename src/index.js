import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import App from './components/app';
import MapIndex from './components/map_index';
import Home from './components/home';
import StudentData from './components/student';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <Switch>
      <Route exact path='/map' component={MapIndex} />
        <Route path='/map/:id' component={StudentData} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  </BrowserRouter>

  </Provider>
  , document.querySelector('.app'));
