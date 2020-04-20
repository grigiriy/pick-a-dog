import React, { Component } from 'react';

import '../../assets/scss/styles.scss';
import SubInfo from '../SubInfo';
import DogsList from '../DogsList';
import YMap from '../YMap';

class IndexContainer extends Component {
  render() {
    return (
      <>
        <div className="row z-1">
          <SubInfo />
        </div>
        <div className="row z-0">
          <div className="col-xl-6 col-lg-7 px-0">
            <DogsList />
          </div>
          <div className="col-xl-6 col-lg-5 px-0">
            <YMap />
          </div>
        </div>
      </>
    );
  }
}
export default IndexContainer;
