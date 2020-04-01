import React, { Component } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Helmet from 'react-helmet';

import '../../assets/scss/styles.scss';

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
                'В условиях карантина важен каждый миг проведенный вне дома. Мы запустили специальный маркетплейс для сдачи собак в аренду специально к 1 апреля.'
            },
            {
              name: 'keywords',
              content: 'карантин, самоизоляция, собаки, собака в аренду'
            }
          ]}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${require('../../images/favicon.png')}`
            }
          ]}
        />
        <Header />
        <div className="z-0 container-fluid position-relative">{children}</div>
        <Footer />
      </>
    );
  }
}
export default Layout;
