import React, { Component } from 'react';

import Layout from '../components/Layout';

import Content from '../assets/db/about.js';
const cw = window.innerWidth;
class Contact extends Component {
  state = {
    mobile: cw < 768 ? true : false
  };
  render() {
    return (
      <Layout mobile={this.state.mobile}>
        <h3>Contact</h3>
      </Layout>
    );
  }
}

export default Contact;
