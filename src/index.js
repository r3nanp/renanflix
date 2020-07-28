import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Video from './pages/Cadastro/Video';
import Categoria from './pages/Cadastro/Categoria';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={Video} />
      <Route path="/cadastro/categoria" component={Categoria} />
      <Route component={() => (<h1>404</h1>)} />
    </Switch>
  </Router>,
  document.getElementById('root')
);