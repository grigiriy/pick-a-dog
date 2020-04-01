import React, { Component } from 'react';

import MainScreen from '../components/MainScreen';
import PromoList from '../components/PromoList';
import PreviewList from '../components/PreviewList';
import Layout from '../components/Layout';

import Content from '../assets/db/mainScreen.js';

const cw = window.innerWidth;
class IndexPage extends Component {
  state = {
    mobile: cw < 768 ? true : false
  };

  render() {
    return (
      <Layout mobile={this.state.mobile}>
        <MainScreen content={Content} />
        <PromoList />
        <PreviewList mobile={this.state.mobile} />
      </Layout>
    );
  }
}

export default IndexPage;
