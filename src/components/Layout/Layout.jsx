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
          title="Pick-a-dog - Возьми собаку в аренду"
          meta={[
            {
              name: 'description',
              content:
                'В условиях карантина важен каждый миг проведенный вне дома. Мы запустили специальный маркетплейс для сдачи собак в аренду специально к 1 апреля.',
            },
            {
              name: 'keywords',
              content: 'карантин, самоизоляция, собаки, собака в аренду',
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
            return <Header content={data.kennelsJson} />;
          }}
        />
        <div className="z-0 container-fluid bg-light pt-3">{children}</div>
        <StaticQuery
          query={navQuery}
          render={(data) => {
            return <Footer content={data.kennelsJson} />;
          }}
        />
      </>
    );
  }
}
export default Layout;
