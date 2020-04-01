import React, { Component } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import '../../assets/scss/styles.scss';

class Layout extends Component {
  render() {
    let { children } = this.props;
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }
}
export default Layout;
