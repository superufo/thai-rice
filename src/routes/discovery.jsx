import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import styles from './discovery.less';
import Article from '../components/discovery/Article';
import Feedback from '../components/discovery/Feedback';

import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

const tabs = [
    { title: <Badge text={''}>美食文章</Badge> },
    { title: <Badge text={''}>留言板</Badge> },
];

const Discovery = ({
  dispatch, location, discovery, loading,
}) => {
  //console.log("index:discovery");console.log(discovery);
  const { headerInfo } = discovery;
  const isLoading = loading.effects['discovery/query'];

  return (
      <div className={styles.normal} style={{ fontFamily: 'Georgia, sans-serif', textAlign: 'center', paddingTop:'35px',marginTop:'45px',}} >
          <Tabs tabs={tabs}
                initialPage={1}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                  <Article />
              </div>
              <div style={{ width:'100%',height: '100%', alignItems: 'left', justifyContent: 'left',backgroundColor: '#fff' }}>
                  <Feedback />
              </div>
          </Tabs>
          <WhiteSpace />
      </div>
  );
};

Discovery.propTypes = {
  location: PropTypes.object.isRequired,
};

export default connect(({ discovery, loading  }) => ({ discovery, loading  }))(Discovery);