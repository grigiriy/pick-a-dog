import React, { Component } from 'react';
import { Link } from 'gatsby';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Content from '../../assets/db/navMenu.js';

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
    let { children } = this.props;
    let is_open = this.state.open ? 'active' : '';
    return (
      <ReactCSSTransitionGroup
        transitionName="header"
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnter={false}
        transitionLeave={false}
        component="header"
        className={'shadow-lg py-3 ' + is_open}
      >
        <ul className="topMenu shadow-lg">
          {Content.items.map(item => (
            <li key={item.link}>
              {item.link === null ? (
                <hr />
              ) : (
                <Link to={`/${item.link}`}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
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
        <div className="logo">
          <img src={require('../../images/logo.png')} alt="" />
        </div>
        {children}
      </ReactCSSTransitionGroup>
    );
  }
}

export default Header;
