import React, { Component } from 'react';
import MainScreen from '../components/MainScreen';
import PromoList from '../components/PromoList';
import Contacts from '../components/Contacts';
import Layout from '../components/Layout';

import Content from '../assets/db/about.js';
const cw = window.innerWidth;
class About extends Component {
  state = {
    mobile: cw < 768 ? true : false
  };
  render() {
    return (
      <Layout mobile={this.state.mobile}>
        <MainScreen content={Content} mobile={this.state.mobile} />
        <Contacts content={Content} />
        <PromoList />
      </Layout>
    );
  }
}

export default About;
