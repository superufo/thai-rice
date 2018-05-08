import { stringify } from 'qs';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';

import styles from './index.less';
import Main from '../layouts/main.jsx';

import MenuCarousel from '../components/index/MenuCarousel';
import TopMenu from '../components/index/TopMenu';

const Index =  ({
   dispatch,location,index,loading
}) => {
  //
  const isLoading = loading.effects['index/query'];

  // console.log("location11111:"+location);
  // console.log("dispatch:"+dispatch);
  // console.log("index:"+index);
  console.log("loading:");
  console.log("loading:"+loading);
  console.log("loading.global:");
  console.log(loading.global );
  console.log("isLoading:" );
  console.log(isLoading);
  console.log("index:");
  console.log(index);

  return (
    <Main location={location} loading={isLoading.toString()}>
         <div>
              <div className={styles.normal}>
                <MenuCarousel />
              </div>
              <div className={styles.bodynormal}  >
                <TopMenu />
              </div>
              <div className={styles.bodynormal}>
                <h1 className={styles.title}>Yay! Welcome to dva!</h1>
                <div className={styles.welcome} />
                <ul className={styles.list}>
                  <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
                  <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
                </ul>
              </div>
         </div>
    </Main>
  );
}

Index.propTypes = {
  location: PropTypes.object.isRequired
};

export default connect(({ index, loading }) => ({ index, loading }))(Index);