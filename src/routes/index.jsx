import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';

import styles from './index.less';
import Main from '../layouts/main.jsx';

import MenuCarousel from '../components/index/MenuCarousel';
import TopMenu from '../components/index/TopMenu';

function Index({
  location
}) {
  return (
    <Main location={location}>
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
    </Main>
  );
}

Index.propTypes = {
  location: PropTypes.object.isRequired
};

export default connect( ({}) => ({}) )(Index);
