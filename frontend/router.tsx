import * as React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history }  from './store';

// Layouts
import Layout from './layout/Layout'

// Pages
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

export const RouterComponent = hot(module)(() => (
  <BrowserRouter>
     <ConnectedRouter history={history}>
        <Layout>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
            </Switch>
        </Layout>
     </ConnectedRouter>
  </BrowserRouter>
))
