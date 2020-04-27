import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Footer from '../Footer';
import Header from '../Header';
import Helmet from 'react-helmet';

import '../../assets/scss/styles.scss';

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
      donate
      text
      link
    }
  }
`;

class Layout extends Component {
  render() {
    let { children } = this.props;
    return (
      <>
        <Helmet
          title="Pick-a-dog - Возьми собаку для прогулок во время самоизоляции"
          meta={[
            {
              name: 'description',
              content:
                'В условиях самоизоляции важен каждый миг проведенный вне дома. Найдите себе нового друга, чтобы скоротать это непростое время.',
            },
            {
              name: 'keywords',
              content: 'карантин, самоизоляция, собаки, собака в аренду',
            },
            {
              name: 'og:title',
              content:
                'Pick-a-dog - Возьми собаку для прогулок во время самоизоляции',
            },
            {
              name: 'og:description',
              content:
                'В условиях самоизоляции важен каждый миг проведенный вне дома. Найдите себе нового друга, чтобы скоротать это непростое время.',
            },
            {
              name: 'og:image',
              content: `${require('../../images/favicon.png')}`,
            },
          ]}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${require('../../images/favicon.png')}`,
            },
          ]}
        />
        <StaticQuery
          query={navQuery}
          render={(data) => {
            return (
              <>
                <Header content={data.kennelsJson} />
                <div className="z-0 container-fluid pt-3">{children}</div>
                <Footer content={data.kennelsJson} />
              </>
            );
          }}
        />
      </>
    );
  }
}
export default Layout;
