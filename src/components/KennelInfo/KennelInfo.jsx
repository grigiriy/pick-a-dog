import React, { Component } from 'react';
import { Link } from 'gatsby';

class KennelInfo extends Component {
  render() {
    let { children } = this.props;
    return (
      <div className="card">
        {/* {children} */}
        <div className="card-header row">
          <div className="col-lg-8">
            <p className="h3">Приют "Сокол"</p>
            <p>м. Сокол, улица Космонавта Волкова 10 с 1</p>
          </div>
          <div className="col-lg-4">
            <a
              href="/test/"
              type="button"
              className="my-lg-1 mx-lg-0 mx-1 btn btn-warning"
            >
              <span role="img" aria-label="на сайт приюта">
                🐶
              </span>{' '}
              На сайт приюта
            </a>
            <a
              href="/test/"
              type="button"
              className="my-lg-1 mx-lg-0 mx-1 btn btn-warning"
            >
              <span role="img" aria-label="помочь приюту">
                💸
              </span>{' '}
              Помочь приюту
            </a>
            <a
              href="/test/"
              type="button"
              className="my-lg-1 mx-lg-0 mx-1 btn btn-warning"
            >
              <span role="img" aria-label="поддержать pick-a-dog">
                🍫
              </span>{' '}
              Поддержать pick-a-dog
            </a>
          </div>
        </div>
        <div className="card-body">
          <p>
            Приют Бирюлево - это муниципальный приют для бездомных собак и кошек
            в Южном округе г. Москвы. В нем живет почти 2500 собак и 150 кошек.
            Большие и маленькие, пушистые и гладкие, веселые и задумчивые - и на
            всех одна большая мечта - встретить своего Человека и найти Дом.
          </p>
          <img
            className="w-75 d-block my-3 mx-auto"
            src={require('../../images/dog_preview.jpg')}
            alt=""
          />
          <p>
            Нашим питомцам нужна ваша помощь! Вы можете сделать их жизнь лучше.
            Приюту Бирюлево всегда требуются корма, поводки и ошейники,
            лекарства, материальная и информационная поддержка. А еще нашим
            собакам и кошкам очень нужна ласка и общение с человеком, поэтому мы
            всегда рады новым волонтерам.
          </p>
        </div>
        <div className="card-footer py-5">
          <div className="d-flex col-lg-8 mx-auto justify-content-center">
            <a
              href="/test/"
              type="button"
              className="mx-lg-3 mx-1 btn btn-warning"
            >
              <span role="img" aria-label="на сайт приюта">
                🐶
              </span>{' '}
              На сайт приюта
            </a>
            <a
              href="/test/"
              type="button"
              className="mx-lg-3 mx-1 btn btn-warning"
            >
              <span role="img" aria-label="помочь приюту">
                💸
              </span>{' '}
              Помочь приюту
            </a>
            <a
              href="/test/"
              type="button"
              className="mx-lg-3 mx-1 btn btn-warning"
            >
              <span role="img" aria-label="поддержать pick-a-dog">
                🍫
              </span>{' '}
              Поддержать pick-a-dog
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default KennelInfo;
