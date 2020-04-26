import React, { Component } from 'react';
import { Link } from 'gatsby';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Header extends Component {
  state = {
    open: false,
  };

  toggleBurger = (e) => {
    this.setState({
      open: e,
    });
  };

  render() {
    let { content } = this.props;
    let is_open = this.state.open ? 'active' : '';
    return (
      <ReactCSSTransitionGroup
        transitionName="header"
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnter={false}
        transitionLeave={false}
        component="header"
        className={'border-bottom pt-3 pb-1 ' + is_open}
      >
        <div className="topMenu d-flex flex-column p-5 bg-dark text-light">
          <ul className="pl-0 mb-5">
            {content.items.map((item) => (
              <li className="py-1" key={item.link}>
                <Link to={`/${item.link}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <p>{content.text}</p>
          <a
            href={content.donate}
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            className="mt-auto mx-lg-0 mx-1 btn btn-warning"
          >
            <span role="img" aria-label="поддержать pick-a-dog">
              🍫
            </span>{' '}
            Поддержать pick&#8209;a&#8209;dog
          </a>
          <p className="mt-3 text-center">
            {content.credintails}{' '}
            <a target="_blank" className="text-warning" href={content.link}>
              {content.author}
            </a>
          </p>
        </div>
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
          <Link to="/">
            <img src={require('../../images/logo.png')} alt="" />
          </Link>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Header;
