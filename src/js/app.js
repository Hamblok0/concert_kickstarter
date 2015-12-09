import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomeView from './components/homeview';
import Band from './components/band';
import BandEdit from './components/band-edit';
import Login from './components/login';
import Register from './components/register';


const routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={HomeView}/>
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
      <Route path="band/:id" component={Band}>
        <Route path="edit" component={BandEdit} />
      </Route>


    </Route>
  </Router>
);

render(routes, document.getElementById('app'))
