import React, { Component } from 'react';

import Layout from '../components/Layout';
import DogCard from '../components/DogCard';
import KennelInfo from '../components/KennelInfo';

class Kennel extends Component {
  render() {
    return (
      <Layout>
        <div className="container py-5">
          <DogCard />
          <KennelInfo />
        </div>
      </Layout>
    );
  }
}

export default Kennel;
