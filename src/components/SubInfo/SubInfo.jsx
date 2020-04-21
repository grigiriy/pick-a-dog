import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';

const navQuery = graphql`
  query {
    kennelsJson {
      items {
        name
        link
      }
      name
      author
      credintails
      text
      link
    }
  }
`;

class SubInfo extends Component {
  render() {
    return (
      <div className="col-12 bg-light px-3 py-5 mt-5">
        <StaticQuery
          query={navQuery}
          render={(data) => {
            return (
              <>
                <h1>{data.kennelsJson.name}</h1>
                <p>{data.kennelsJson.text}</p>
              </>
            );
          }}
        />
      </div>
    );
  }
}
export default SubInfo;
