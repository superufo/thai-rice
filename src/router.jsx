import React from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route,Redirect,routerRedux,IndexRoute } from 'dva/router';
import dynamic from 'dva/dynamic';

import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import App from './routes/app';

const { ConnectedRouter } = routerRedux

const Routers = function ({ history, app }) {
    const routes = [
        {
            path: '/index',
            models: () => [import('./models/index')],
            component: () => import('./routes/index')
        }, {
            path: '/discovery',
            models: () => [import('./models/discovery')],
            component: () => import('./routes/discovery')
        }, {
            path: '/order',
            component: () => import('./routes/order')
        }, {
            path: '/my',
            component: () => import('./routes/my')
        },
    ]

    return (
        <ConnectedRouter history={history}>
            <LocaleProvider locale={enUS}>
                <App>
                    <Switch>
                        <Route exact path="/" render={() => (<Redirect to="/index" />)} />
                        {
                            routes.map(({ path, ...dynamics }, key) => (
                                <Route key={key}
                                       exact
                                       path={path}
                                       component={dynamic({
                                           app,
                                           ...dynamics,
                                       })}
                                />
                            ))
                        }
                    </Switch>
                </App>
            </LocaleProvider>
        </ConnectedRouter>
    )
}

Routers.propTypes = {
    history: PropTypes.object,
    app: PropTypes.object,
}

export default Routers
