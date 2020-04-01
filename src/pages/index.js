import React, { Component } from 'react';

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
        <div class="flex">
          <div class="w-25pc">
            <h3>TEST</h3>
          </div>
          <div class="w-25pc">
            <h3>TEST</h3>
          </div>
          <div class="w-25pc">
            <h3>TEST</h3>
          </div>
          <div class="w-25pc">
            <h3>TEST</h3>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
