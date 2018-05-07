import React from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route,Redirect,routerRedux } from 'dva/router';
import Dynamic from 'dva/dynamic';

import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'

const { ConnectedRouter } = routerRedux

function RouterConfig({
                          history, app
                      }) {
    const Index = Dynamic({
        app,
        models: () => [import('./models/index')],
        component: () => import('./routes/index')
    });
    const Discovery = Dynamic({
        app,
        //models: () => [import('./models/discovery')],
        component: () => import('./routes/discovery')
    });
    const Order = Dynamic({
        app,
        component: () => import('./routes/order')
    });
    const My = Dynamic({
        app,
        component: () => import('./routes/my')
    });

    return (
        <ConnectedRouter history={history}>
            <LocaleProvider locale={enUS}>
                    <Switch>
                        <Route exact path="/"  component={Index} />
                        <Route exact path="/index" component={Index} />
                        <Route exact path="/discovery" component={Discovery} />
                        <Route exact path="/order" component={Order} />
                    </Switch>
            </LocaleProvider>
        </ConnectedRouter>
    )


    // return (
    //     <Router history={history}>
    //         <Switch>
    //             <Route exact path="/" component={Index} />
    //             <Route exact path="/index" component={Index} />
    //             <Route exact path="/discovery" component={Discovery} />
    //             <Route exact path="/order" component={Order} />
    //             <Route exact path="/my" component={My} />
    //         </Switch>
    //     </Router>
    // );
}

RouterConfig.propTypes = {
    history: PropTypes.object.isRequired
};

export default RouterConfig;
