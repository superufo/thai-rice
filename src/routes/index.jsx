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
  const {menu,adv}= index;
  const isLoading = loading.effects['index/query'];
  // console.log("loading:");
  // console.log("loading:"+loading);
  // console.log("loading.global:");
  // console.log(loading.global );
  // console.log("isLoading:" );
  // console.log(isLoading);
  // console.log("index:");
  // console.log(index);
  // console.log("index:state:adv");
  // console.log(adv);

  return (
    <Main location={location} loading={isLoading.toString()}>
         <div>
              <div className={styles.normal}>
                <MenuCarousel advData={adv}  />
              </div>
              <div className={styles.bodynormal}  >
                <TopMenu tabs={menu} />
              </div>
         </div>
    </Main>
  );
}

Index.propTypes = {
  location: PropTypes.object.isRequired
};

export default connect(({ index, loading }) => ({ index, loading }))(Index);