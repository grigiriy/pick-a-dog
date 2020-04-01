import React, { Component } from 'react';
import { Link } from 'gatsby';

import './styles.scss';

import Content from '../../assets/db/navMenu.js';

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <footer>
          <h3>
            by{' '}
            <a target="_blank" href="https://grigiriy.ru">
              @grigiriy
            </a>
          </h3>
        </footer>
      </section>
    );
  }
}

export default Footer;
