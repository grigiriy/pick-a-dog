import React, { Component } from 'react';

import { Helmet } from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';

import { graphql, StaticQuery } from 'gatsby';
import '../../assets/scss/styles.scss';

const navQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
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
          // defer={true}
          title="Pick-a-dog - Возьми собаку для прогулок во время самоизоляции"
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${require('../../images/favicon.png')}`,
            },
          ]}
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
              property: 'og:title',
              content:
                'Pick-a-dog - Возьми собаку для прогулок во время самоизоляции',
            },
            {
              property: 'og:description',
              content:
                'В условиях самоизоляции важен каждый миг проведенный вне дома. Найдите себе нового друга, чтобы скоротать это непростое время.',
            },
            {
              property: 'og:image',
              content: `${require('../../images/og.jpg')}`,
            },
            {
              property: 'og:image:url',
              content: `${require('../../images/og.jpg')}`,
            },
            {
              property: 'og:image:width',
              content: 1200,
            },
            {
              property: 'og:image:height',
              content: 630,
            },
            {
              name: 'yandex-verification',
              content: '74a94675657d77b9',
            },
            {
              name: 'google-site-verification',
              content: 'wGEqjkW29uPT70Dj8s9HwfjozrI884NdYdEYvlLKdxc',
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
