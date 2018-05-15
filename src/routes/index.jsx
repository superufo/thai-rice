import { stringify } from 'qs';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { NoticeBar } from 'antd-mobile';
import styles from './index.less';
import MenuCarousel from '../components/index/MenuCarousel';
import TopMenu from '../components/index/TopMenu';

const Index =  ({
   dispatch,location,index,loading
}) => {
   const {menu,adv}= index;
   //const isLoading = loading.effects['index/query'];
    // console.log("index：");
    // console.log(index);

   return (
        <div>
            <div className={styles.normal}  style={{ fontFamily: 'Georgia, sans-serif', textAlign: 'center', paddingTop:'35px',marginTop:'45px',}}   >
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