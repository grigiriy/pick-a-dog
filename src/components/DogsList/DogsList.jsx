import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import DogCard from '../DogCard';

const allDogsQuery = graphql`
  query {
    allDogsJson(sort: { fields: name, order: ASC }) {
      nodes {
        id
        name
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

class DogsList extends Component {
  render() {
    return (
      <StaticQuery
        query={allDogsQuery}
        render={(data) => {
          return data.allDogsJson.nodes.map((item) => (
            <DogCard key={item.id} dog={item} />
          ));
        }}
      />
    );
  }
}
export default DogsList;
