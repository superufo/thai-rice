import React from 'react';
import PropTypes from 'prop-types';
import { connect, } from 'dva';
import { withRouter } from 'dva/router';
import styles from './discovery.less';
import Header from '../layouts/header.jsx';
import Footer from '../layouts/footer.jsx';
import { Loader } from '../components/Loader/Loader'

const App = ({
    children, dispatch, app, loading, location,
}) => {
    const { headerInfo } = app;
    // console.log("index:headerInfo");console.log(headerInfo);
    // console.log("children:");console.log(children);

    return (
        <div>
            <Header location={location} headerInfo={headerInfo} />
            <Footer location={location} childrens={children}/>
        </div>
    );
};

App.propTypes = {
    location: PropTypes.object.isRequired,
};

//export default App;   <Loader fullScreen spinning={loading.effects['app/query']} />
//export default connect(({ app, loading  }) => ({ app, loading  }))(App);
export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))