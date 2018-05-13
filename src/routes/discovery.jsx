import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import styles from './discovery.less';

const Discovery = ({
  dispatch, location, discovery, loading,
}) => {
  //console.log("index:discovery");console.log(discovery);
  const { headerInfo } = discovery;
  const isLoading = loading.effects['discovery/query'];

  return (
      <div className={styles.normal}>
            Route Component: discovery
      </div>
  );
};

Discovery.propTypes = {
  location: PropTypes.object.isRequired,
};

export default connect(({ discovery, loading  }) => ({ discovery, loading  }))(Discovery);