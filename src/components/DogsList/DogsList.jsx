import React, { Component } from 'react';

import DogCard from '../../components/DogCard';

class DogsList extends Component {
  render() {
    const Arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let { children } = this.props;
    return (
      <div className="my-5">
        {/* {children} */}
        {Arr.map(item => (
          <DogCard />
        ))}
      </div>
    );
  }
}
export default DogsList;
