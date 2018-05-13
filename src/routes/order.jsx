import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import styles from './order.less';
import {Cart} from '../components/order/Cart';

function Order({
  location
}) {
  return (
      <div className={styles.normal}>
        <Cart />
      </div>
  );
}

Page02.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Order);
