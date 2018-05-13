import { stringify } from 'qs';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';

import styles from './index.less';
import MenuCarousel from '../components/index/MenuCarousel';
import TopMenu from '../components/index/TopMenu';

const Index =  ({
   dispatch,location,index,loading
}) => {
  const {menu,adv,headerInfo}= index;
  //const isLoading = loading.effects['index/query'];

   return (
        <div>
            <div className={styles.normal}>
                <MenuCarousel advData={adv}  />
            </div>
            <div className={styles.bodynormal}  >
                <TopMenu tabs={menu} />
            </div>
        </div>
  );
}

Index.propTypes = {
  location: PropTypes.object.isRequired
};

export default connect(({ index, loading }) => ({ index, loading }))(Index);