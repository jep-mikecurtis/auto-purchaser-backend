import * as React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history }  from './store';

// Layouts
import Layout from './layout/Layout'

// Pages
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

export const RouterComponent = hot(module)(() => (
  <BrowserRouter>
     <ConnectedRouter history={history}>
        <Layout>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
            </Switch>
        </Layout>
     </ConnectedRouter>
  </BrowserRouter>
))
