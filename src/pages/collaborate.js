import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/Layout';

const navQuery = graphql`
  query {
    kennelsJson {
      donate
    }
  }
`;

class IndexPage extends Component {
  donate_me = () => {
    if (window.ym) {
      window.ym(62302222, 'reachGoal', 'donate_me');
      console.log('donate_me');
    }
  };
  connect_me = () => {
    if (window.ym) {
      window.ym(62302222, 'reachGoal', 'connect_me');
      console.log('connect_me');
    }
  };

  render() {
    return (
      <Layout>
        <div className="py-5 container">
          <div className="card mt-5">
            <div className="p-md-5 p-3">
              <h1 className="mb-5 adaptive_headline">Сотрудничество</h1>
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
                друга благодоря этому сайту - напишите, мне будет приятно об
                этом узнать.
              </p>
              <h5 className="mt-5">Куда писать?</h5>
              <p>
                <span role="img" aria-label="">
                  📱
                </span>{' '}
                Telegram{' '}
                <a onClick={this.connect_me} href="https://t.me/gmalyshev">
                  @gmalyshev
                </a>
              </p>
              <p>
                <span role="img" aria-label="">
                  📧
                </span>{' '}
                e-mail{' '}
                <a
                  onClick={this.connect_me}
                  href="mailto:grigiriy.malyshev@gmail.com"
                >
                  grigiriy.malyshev@gmail.com
                </a>
              </p>
              <p>
                <StaticQuery
                  query={navQuery}
                  render={(data) => {
                    return (
                      <a
                        onClick={this.donate_me}
                        href={data.kennelsJson.donate}
                        target="_blank"
                        rel="noopener noreferrer"
                        type="button"
                        className="mt-auto mx-lg-0 btn btn-warning"
                      >
                        <span role="img" aria-label="поддержать pick-a-dog">
                          🍫
                        </span>{' '}
                        Поддержать pick&#8209;a&#8209;dog
                      </a>
                    );
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
