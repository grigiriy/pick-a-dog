import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { graphql, StaticQuery } from 'gatsby';

import dogface from '../../images/favicon.png';

const allDogsQuery = graphql`
  query {
    allDogsJson(sort: { fields: name, order: ASC }) {
      nodes {
        id
        name
        geo
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`;
class YMap extends Component {
  render() {
    let { children } = this.props;
    return (
      <YMaps>
        <div
          className={!this.props.mobile ? 'position-fixed' : ''}
          style={{
            top: 0,
          }}
        >
          <Map
            style={{
              minWidth: `50vw`,
              minHeight: `100vh`,
            }}
            state={{
              center: [55.67411, 37.608526],
              zoom: 12,
            }}
          >
            <StaticQuery
              query={allDogsQuery}
              render={(data) => {
                return data.allDogsJson.nodes.map((item) => (
                  <Placemark
                    key={item.id}
                    geometry={item.geo}
                    properties={{
                      hintContent: 'Собственный значок метки',
                      balloonContent: 'ТЕСТ',
                    }}
                    options={{
                      iconLayout: 'default#image',
                      iconImageHref: dogface,
                      iconImageSize: [50, 50],
                      iconImageOffset: [-3, -42],
                    }}
                  />
                ));
              }}
            />
          </Map>
          {children}
        </div>
      </YMaps>
    );
  }
}
export default YMap;
