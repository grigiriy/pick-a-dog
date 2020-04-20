import React, { Component } from 'react';

import Layout from '../Layout';
import DogCard from '../DogCard';
import KennelInfo from '../KennelInfo';

class DogPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container py-5">
          <DogCard dog={this.props.pageContext.dog} />
          <KennelInfo />
        </div>
      </Layout>
    );
  }
}

export default DogPage;
