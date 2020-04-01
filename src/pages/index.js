import React, { Component } from 'react';

import Layout from '../components/Layout';
import IndexContainer from '../components/IndexContainer';

import Content from '../assets/db/mainScreen.js';

const cw = window.innerWidth;
class IndexPage extends Component {
  state = {
    mobile: cw < 768 ? true : false
  };

  render() {
    return (
      <Layout mobile={this.state.mobile}>
        <IndexContainer />
      </Layout>
    );
  }
}

export default IndexPage;
