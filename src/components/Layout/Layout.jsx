import React, { Component } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import '../../assets/scss/styles.scss';

class Layout extends Component {
  render() {
    let { children } = this.props;
    return (
      <>
        {/* <Header /> */}
        <div
          className="container-fluid"
          style={{
            backgroundImage: `url(${require('../../images/' +
              'back_map.jpg')})`,
            backgroundSize: `cover`,
            backgroundPositionX: `center`,
            backgroundRepeat: `no-repeat`
          }}
        >
          {children}
        </div>
        {/* <Footer /> */}
      </>
    );
  }
}
export default Layout;
