import React, { Component } from 'react';
import { Link } from 'gatsby';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './styles.scss';

import Content from '../../assets/db/navMenu.js';
import Contacts from '../../assets/db/about.js';

class Header extends Component {
  state = {
    open: false
  };

  toggleBurger = e => {
    this.setState({
      open: e
    });
  };

  render() {
    let { credits } = Contacts;
    return (
      <ReactCSSTransitionGroup
        transitionName="header"
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnter={false}
        transitionLeave={false}
        component="header"
        className={this.state.open ? 'active' : ''}
      >
        <ul className="topMenu">
          {Content.items.map(item => (
            <li key={item.link}>
              {item.link === null ? (
                <hr />
              ) : (
                <Link to={`/${item.link}`}>{item.name}</Link>
              )}
            </li>
          ))}
          <li key="ig" className="igSvg">
            <a href={`https://www.instagram.com/${credits.inst}`}>
              {this.props.mobile ? (
                <span className="credits">@{credits.inst}</span>
              ) : (
                <img src={require('../../images/ig.svg')} alt="" />
              )}
            </a>
          </li>

          {this.props.mobile && (
            <>
              <hr />
              <li key="phone" className="credits">
                <a href={`tel:${credits.phone.replace(/[-, ]/g, '')}`}>
                  {credits.phone}
                </a>
              </li>
              <li key="email" className="credits">
                <a href={`mailto:${credits.email}`}>{credits.email}</a>
              </li>
            </>
          )}
        </ul>
        {this.props.mobile && (
          <div
            id="burger"
            onClick={() => {
              this.toggleBurger(!this.state.open);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        {/* <h1 className="headerBack">Maria Medvedik</h1> */}
        <div
          className="headerBack"
          style={{
            backgroundImage: `url(${require('../../images/' +
              'MariaMedvedik.png')})`
          }}
        ></div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Header;
