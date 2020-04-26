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
        <div className="container">
          <div className="card p-md-5 p-3">
            <StaticQuery
              query={navQuery}
              render={(data) => {
                return (
                  <>
                    <h1>{data.kennelsJson.name}</h1>
                    <p>
                      Во время самоизоляции не так много <i>законных</i>{' '}
                      способов выйти из дома. Это особенно тяжело дается в
                      солнечную погоду, которая сейчас практически каждый день.
                    </p>
                    <h5>Есть решение!</h5>
                    <p>
                      прогулки с собаками на свежем воздухе! Ниже представлены
                      собак, которые хотят гулять, и немного приветственной
                      информации, которая поможет вам сделать выбор.
                    </p>
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
        </div>
      </div>
    );
  }
}
export default SubInfo;
