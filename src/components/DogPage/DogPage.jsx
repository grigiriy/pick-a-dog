import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Layout from '../Layout';
import DogInfo from '../DogInfo';
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
        <div className="py-5">
          <div className="card mt-5">
            <DogInfo dog={this.props.pageContext.dog} />
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
        </div>
      </Layout>
    );
  }
}

export default DogPage;
