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
        main
        secondary
        image
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
    let maxWidth = this.props.mobile ? '100vw' : '50vw';
    let { children } = this.props;
    return (
      <YMaps>
        <div
          className={!this.props.mobile ? 'position-fixed' : ''}
          style={{
            top: 0,
            width: maxWidth,
          }}
        >
          <Map
            style={{
              minWidth: `50vw`,
              minHeight: `100vh`,
            }}
            state={{
              center: [55.769711, 37.636707],
              zoom: 11,
            }}
          >
            <StaticQuery
              query={allDogsQuery}
              render={(data) => {
                return data.allDogsJson.nodes.map((item) => (
                  <Placemark
                    modules={[
                      'geoObject.addon.balloon',
                      'geoObject.addon.hint',
                    ]}
                    key={item.id}
                    geometry={item.geo}
                    properties={{
                      hintContent: item.name,
                      item: item.id,
                      balloonContentHeader: `<h3 style="max-width:230px;margin-left:20px">${item.name}</h3>`,
                      balloonContentBody: `<div style="margin-left:20px"><img style="max-width:230px;margin-bottom:10px" src="${require('../../images/' +
                        item.image)}"/><p style="max-width:230px">${
                        item.main + ' ' + item.secondary
                      }</p></div>`,
                      balloonContentFooter: `<a
                          style="max-width:230px;margin-left:20px;margin-bottom:20px"
                          href=${item.parent.name}
                          type="button"
                          class="my-lg-1 mr-auto btn btn-warning"
                        >
                          Взять на прогулку
                          <span role="img" aria-label="на сайт приюта">
                            🐕‍🦺
                          </span>
                        </a>`,
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
