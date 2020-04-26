import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <div className="row mt-5">
          <div className="container mt-5">
            <h1>Сотрудничество</h1>
            <p>
              Я открыт к сотрудничеству в любой адекватной форме. Степень
              адекватности смогу определить только после предложения.
            </p>
            <p>
              Буду рад разместить ваших хвостов, если вы приют. Только попрошу
              скинуть их мне в удобном формате.
            </p>
            <div className="w-75 d-flex mx-auto justify-content-around">
              <span role="img" aria-label="" className="h1">
                🐶
              </span>
              <span role="img" aria-label="" className="h1">
                🐶
              </span>
              <span role="img" aria-label="" className="h1">
                🐶
              </span>
            </div>
            <p className="mt-3">
              Также буду очень рад любой обратной связи. Если вы нашли{' '}
              <span role="img" aria-label="">
                🐕
              </span>{' '}
              друга благодоря этому сайту - напишите, мне будет приятно об этом
              узнать.
            </p>
            <h5 className="mt-5">Куда писать?</h5>
            <p>
              <span role="img" aria-label="">
                📱
              </span>{' '}
              Telegram <a href="https://t.me/gmalyshev">@gmalyshev</a>
            </p>
            <p>
              <span role="img" aria-label="">
                📧
              </span>{' '}
              e-mail{' '}
              <a href="mailto:grigiriy.malyshev@gmail.com">
                grigiriy.malyshev@gmail.com
              </a>
            </p>
            <p>
              <a
                href="/"
                type="button"
                className="mt-auto mx-lg-0 btn btn-warning"
              >
                <span role="img" aria-label="поддержать pick-a-dog">
                  🍫
                </span>{' '}
                Поддержать pick&#8209;a&#8209;dog
              </a>
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
