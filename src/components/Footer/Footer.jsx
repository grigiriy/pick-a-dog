import React, { Component } from 'react';
import { Link } from 'gatsby';

class Footer extends Component {
  render() {
    return (
      <section className="z-1 position-relative container-fluid">
        <footer className="bg-light row p-5">
          <div className="col-xl-9 p-3">
            <p>
              Данный сайт создан с целью привлечения внимания к трудностям, с
              которыми сталкиваются приюты в это непростое время.
            </p>
            <p>
              Некоторые приюты сейчас закрыты на карантин, но многие продолжают
              работать, пусть и с меньшим количеством волонтеров.
            </p>
          </div>
          <h4 className="col-xl-3 p-3">
            by{' '}
            <a target="_blank" href="https://grigiriy.ru">
              @grigiriy
            </a>
          </h4>
        </footer>
      </section>
    );
  }
}

export default Footer;
