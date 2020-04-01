import React, { Component } from 'react';

import DogCard from '../../components/DogCard';

class DogsList extends Component {
  render() {
    const Arr = [0, 1, 2, 3, 4];
    let { children } = this.props;
    return (
      <div className="col-xl-6 col-lg-7">
        <div className="my-5 card-group flex-column">
          {/* {children} */}
          {Arr.map(item => (
            <DogCard />
          ))}
        </div>
      </div>
    );
  }
}
export default DogsList;
