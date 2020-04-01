import React, { Component } from 'react';

import '../../assets/scss/styles.scss';
import DogsList from '../../components/DogsList';
import YMap from '../../components/YMap';

class IndexContainer extends Component {
  render() {
    let { children } = this.props;
    return (
      <>
        {/* {children} */}
        <div className="row">
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
