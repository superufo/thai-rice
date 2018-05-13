//import cookie from 'react-cookie';
import { message } from 'antd';
import dva from 'dva';
import './index.less';

import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
import 'babel-polyfill';

// 1. Initialize
const app = dva({
    ...createLoading({
        effects: true,
    }),
    history: createHistory(),
    onError (error) {
        message.error(error.message)
    },
})

// 2. Plugins
// app.use();
//app.use(createLoading());

// 3. Model
// Moved to router.js
app.model(require('./models/app'))

// 4. Router
app.router(require('./router.jsx'));

// 5. Start
app.start('#root');

export default app._store; // eslint-disable-line