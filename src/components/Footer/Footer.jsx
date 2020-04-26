import React, { Component } from 'react';

class Footer extends Component {
  render() {
    let { content } = this.props;
    return (
      <section className="z-1 shadow-lg bg-light footer">
        <footer className="d-flex flex-column mb-5 py-5 container">
          <div className="mr-auto">
            <p>{content.text}</p>
          </div>
          <h6 className="ml-auto">
            {content.credintails}{' '}
            <a target="_blank" href={content.link}>
              {content.author}
            </a>
          </h6>
        </footer>
      </section>
    );
  }
}

export default Footer;
