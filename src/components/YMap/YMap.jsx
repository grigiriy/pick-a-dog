import React, { Component } from 'react';
import { YMaps, Map } from 'react-yandex-maps';

class YMap extends Component {
  render() {
    let { children } = this.props;
    return (
      <YMaps>
        <div className="position-fixed">
          <Map
            style={{
              minWidth: `50vw`,
              minHeight: `100vh`
            }}
            state={{
              center: [55.75, 37.57],
              zoom: 12
            }}
          />
          {children}
        </div>
      </YMaps>
    );
  }
}
export default YMap;
