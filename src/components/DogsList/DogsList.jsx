import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import DogCard from '../../components/DogCard';

const allDogsQuery = graphql`
  query {
    allDogsJson(sort: { fields: name, order: ASC }) {
      nodes {
        id
        name
        main
        secondary
        image
      }
    }
  }
`;

class DogsList extends Component {
  render() {
    return (
      <div className="my-5">
        <StaticQuery
          query={allDogsQuery}
          render={(data) => {
            return data.allDogsJson.nodes.map((item) => (
              <DogCard key={item.id} dog={item} />
            ));
          }}
        />
      </div>
    );
  }
}
export default DogsList;
