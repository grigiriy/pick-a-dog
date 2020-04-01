import React, { Component } from 'react';

import '../../assets/scss/styles.scss';
import DogsList from '../../components/DogsList';

class IndexContainer extends Component {
  render() {
    let { children } = this.props;
    return (
      <>
        {/* {children} */}
        <div className="row px-5">
          <DogsList />
        </div>
      </>
    );
  }
}
export default IndexContainer;
