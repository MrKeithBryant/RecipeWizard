import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import homepage from './components/homepage.js';
import kitchen from './components/kitchen.js';
import BaseLayout from './components/baselayout';
import inventory from './components/inventory';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
        <Switch>
          <Route exact path='/' component={homepage}/>
          <Route path='/kitchen' component={kitchen}/>
          <Route path='/inventory' component={inventory}/>
        </Switch>
    </BaseLayout>
  </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
