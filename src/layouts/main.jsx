import React from 'react';
import PropTypes from 'prop-types';

import Header from './header.jsx';
import Footer from './footer.jsx';

import styles from './main.less';

function Main({
  children, location, loading,
}) {
  console.log(`Main loading:${loading}`);

  return (
    <div className={styles.normal} loading={loading} >
      <Header location={location} />
      <Footer location={location} childrens={children} />
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired,
};

export default Main;
