import React, { Component } from 'react';
import { Link } from 'gatsby';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
      </ReactCSSTransitionGroup>
    );
  }
}

export default Header;
