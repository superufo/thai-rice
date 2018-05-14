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

    console.log("index：");
    console.log(index);
    //
    // let noticeControl = '<div></div>';
    // if(  notice.content!="" ){
    //      noticeControl = (<div style={{position:'fixed',top:'50',paddingTop:'50px',width:'100%',height:'30px',background:'#f30',}}> <NoticeBar mode="link" onClick={() => alert('1')}>`{notice.title}:${notice.content}`</NoticeBar></div>);
    // }
    //
    // console.log("noticeControl：");
    // console.log(noticeControl);

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