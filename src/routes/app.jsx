import React from 'react';
import PropTypes from 'prop-types';
import { connect, } from 'dva';
import { withRouter } from 'dva/router';
import styles from './discovery.less';
import Header from '../layouts/header.jsx';
import Footer from '../layouts/footer.jsx';

import Detailheader from '../layouts/detailHeader.jsx';
import Detail from '../layouts/detail.jsx';

import { Loader } from '../components/Loader/Loader';
import stringUtils  from '../utils/stringUtils.js';
import config  from '../utils/config.js';

const {appIndex} = config;

const testclicka = (e) => {  console.log('1111 e:',e.target) ;   }
const testclickb = (n) => { console.log('222222 n:',n.target) ;   }

const App = ({
    children, dispatch, app, loading, location,history
}) => {
    const { headerInfo,notice } = app;
    // console.log("index:headerInfo");console.log(headerInfo);
    // console.log("children:");console.log(children);

    let { pathname } = location ;
    //console.log("pathname:");console.log(pathname);
    pathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
    //console.log("pathname:");console.log(pathname);
    //pathname = 'article'

    if( stringUtils.in_array(pathname, appIndex)==true ) {
        return (
            <div onClick={testclicka}>
                <div onClick={testclickb}  style={{height:'12%'}}>
                    <Header location={location} headerInfo={headerInfo} notice={notice}/>
                </div>
                <div style={{position: 'fixed', height: '88%', width: '100%', top: '',}}  >
                    <Footer location={location} childrens={children}/>
                </div>
            </div>
        );
    }else{
        //console.log("other page");
        return (
            <div>
                <Detailheader location={location} dispatch={dispatch} history={history}  headerInfo={headerInfo}/>
                <Detail location={location} childrens={children}/>
            </div>
        );
    }

};

App.propTypes = {
    location: PropTypes.object.isRequired,
};

//export default App;   <Loader fullScreen spinning={loading.effects['app/query']} />
//export default connect(({ app, loading  }) => ({ app, loading  }))(App);

//

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))