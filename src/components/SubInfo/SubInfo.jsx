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
    const { toggleTab, active_tab } = this.props;
    return (
      <div className="col-12 bg-light px-3 py-5 mt-5">
        <StaticQuery
          query={navQuery}
          render={(data) => {
            return (
              <>
                <h1>{data.kennelsJson.name}</h1>
                <p>{data.kennelsJson.text}</p>
                <div className={'d-flex d-lg-none ' + active_tab}>
                  <button
                    className="btn btn-warning map_block"
                    onClick={(e) => toggleTab(e)}
                  >
                    <span role="img" aria-label="списком">
                      🗒
                    </span>{' '}
                    Списком
                  </button>
                  <button
                    className="btn btn-warning list_block"
                    onClick={(e) => toggleTab(e)}
                  >
                    <span role="img" aria-label="на карте">
                      🗺
                    </span>{' '}
                    На карте
                  </button>
                </div>
              </>
            );
          }}
        />
      </div>
    );
  }
}
export default SubInfo;
