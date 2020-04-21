import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Layout from '../Layout';
import DogCard from '../DogCard';
import KennelInfo from '../KennelInfo';

const KennelsQuery = graphql`
  query {
    allAboutJson {
      nodes {
        id
        name
        image
        inst
        photo_source
        url
        donate
        additional
        about
      }
    }
  }
`;

class DogPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container py-5">
          <DogCard dog={this.props.pageContext.dog} />
          <StaticQuery
            query={KennelsQuery}
            render={(data) => {
              return data.allAboutJson.nodes.map(
                (item) =>
                  this.props.pageContext.dog.image.split('-', 1)[0] ===
                    item.image.split('.', 1)[0] && (
                    <KennelInfo key={item.id} kennel={item} />
                  )
              );
            }}
          />
        </div>
      </Layout>
    );
  }
}

export default DogPage;
