import React, { Component } from 'react';
import { Link } from 'gatsby';

class KennelInfo extends Component {
  render() {
    const { kennel } = this.props;
    return (
      <>
        <div className="bg-light p-md-5 p-3">
          <div className="row">
            <div className="col-lg-8">
              <p className="h3">{kennel.name}</p>
              <p>{kennel.additional}</p>
            </div>
            <div className="col-lg-4">
              <a
                href={kennel.url}
                type="button"
                target="_blank"
                className="my-1 mx-lg-0 mx-1 btn btn-warning"
              >
                <span role="img" aria-label="на сайт приюта">
                  🐶
                </span>{' '}
                На сайт приюта
              </a>
              <a
                href={kennel.donate}
                target="_blank"
                type="button"
                className="my-1 mx-lg-0 mx-1 btn btn-warning"
              >
                <span role="img" aria-label="помочь приюту">
                  💸
                </span>{' '}
                Помочь приюту
              </a>
              <Link
                to="/test/"
                type="button"
                className="my-1 mx-lg-0 mx-1 btn btn-warning"
              >
                <span role="img" aria-label="поддержать pick-a-dog">
                  🍫
                </span>{' '}
                Поддержать pick-a-dog
              </Link>
            </div>
          </div>
        </div>
        <div className="p-md-5 p-3">
          <p>{kennel.about}</p>
          <img
            className="w-100 d-block mt-3 mx-auto"
            src={require('../../images/' + kennel.image)}
            alt=""
          />
          <p className="smaller text-center mt-1">
            Вся информация взята с{' '}
            <a target="_blank" href={kennel.url}>
              сайта приюта
            </a>
            .{' '}
            <a target="_blank" href={kennel.photo_source}>
              оригинал изображения
            </a>
          </p>
          <p>{kennel.additional}</p>
        </div>
        <div className="bg-light py-5 text-center">
          <div className="d-sm-flex col-lg-8 mx-auto justify-content-center">
            <a
              href="/test/"
              type="button"
              className="mx-lg-3 mx-1 my-1 my-md-0 btn btn-warning"
            >
              <span role="img" aria-label="на сайт приюта">
                🐶
              </span>{' '}
              На сайт приюта
            </a>
            <a
              href="/test/"
              type="button"
              className="mx-lg-3 mx-1 my-1 my-md-0 btn btn-warning"
            >
              <span role="img" aria-label="помочь приюту">
                💸
              </span>{' '}
              Помочь приюту
            </a>
            <a
              href="/test/"
              type="button"
              className="mx-lg-3 mx-1 my-1 my-md-0 btn btn-warning"
            >
              <span role="img" aria-label="поддержать pick-a-dog">
                🍫
              </span>{' '}
              Поддержать pick-a-dog
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default KennelInfo;
