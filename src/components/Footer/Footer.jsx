import React, { Component } from 'react';

class Footer extends Component {
  render() {
    let { content } = this.props;
    return (
      <section className="z-1 container-fluid shadow-lg bg-light p-5">
        <footer className="d-flex flex-column mb-5">
          <div className="mr-auto">
            <p>{content.text}</p>
          </div>
          <h4 className="ml-auto">
            {content.credintails}{' '}
            <a target="_blank" href={content.link}>
              {content.author}
            </a>
          </h4>
        </footer>
      </section>
    );
  }
}

export default Footer;
