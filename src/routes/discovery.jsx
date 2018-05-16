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
      <div  style={{ fontFamily: 'Georgia, sans-serif', textAlign: 'center'}} >
          <Tabs tabs={tabs}
                initialPage={1}
                onChange={(tab, index) => {} }
                onTabClick={(tab, index) => {}}
          >
              <div style={{width:'100%',height: '100%', backgroundColor: '#fff' }}>
                  <Article dispatch={dispatch}/>
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