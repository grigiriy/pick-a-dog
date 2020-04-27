import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <div className="py-5 container">
          <div className="card mt-5">
            <div className="p-md-5 p-3">
              <h1 className="mb-5">Такой страницы нет</h1>
              <p>
                Попробуйте начать <Link to="/">сначала</Link>{' '}
                <span role="img" aria-label="dog">
                  🐶
                </span>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default IndexPage;
