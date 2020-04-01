import React, { Component } from 'react';
import { Link } from 'gatsby';

import './styles.scss';

import Content from '../../assets/db/navMenu.js';

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <footer>
          <ul className="botMenu">
            <li key="copyright">© Maria Medvedik 2020</li>
            {Content.items.map(item => {
              if (item.inFooter)
                return (
                  <li key={item.link}>
                    {item.link === null ? (
                      <hr />
                    ) : (
                      <Link to={`/${item.link}`}>{item.name}</Link>
                    )}
                  </li>
                );
              return null;
            })}
            <li key="ig" className="igSvg">
              <a href="https://www.instagram.com/mashamedvedik/">
                <img src={require('../../images/ig.svg')} alt="" />
              </a>
            </li>
          </ul>
          <h1 className="footerBack">Maria Medvedik</h1>
        </footer>
      </section>
    );
  }
}

export default Footer;
