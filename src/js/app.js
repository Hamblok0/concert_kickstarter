import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomeView from './components/homeview';
import BandProfile from './components/band-profile';
import BandEdit from './components/band-edit';
import Login from './components/login';
import Register from './components/register';
import Fund from './components/fund';


const routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={HomeView}/>
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
      <Route path="band/:id" component={BandProfile}>
        <Route path="edit" component={BandEdit} />
      </Route>
      <Route path ="fund" component={Fund} />
    </Route>
  </Router>
);

render(routes, document.getElementById('app'))
