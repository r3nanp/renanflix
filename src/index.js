import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Video from './pages/Cadastro/Video'
import Categoria from './pages/Cadastro/Categoria'

const error = () => (
  <a href="https://r3nanp-flappy-bird-clone.netlify.app/">
    Página não encontrada
  </a>
)

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={Video} />
      <Route path="/cadastro/categoria" component={Categoria} />
      <Route component={error} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
