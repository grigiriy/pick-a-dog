import React, { Component } from 'react';

class DogInfo extends Component {
  render() {
    const { dog } = this.props;
    return (
      <div className="p-md-5 p-3">
        <div className="row">
          <img
            className="w-100 h-100 d-block mx-auto col-md-5"
            src={require('../../images/' + dog.image)}
            alt=""
          />
          <div className="d-flex flex-column col-md-7">
            <p className="h3 pt-3 pt-md-0">{dog.name}</p>
            <p>
              {dog.main}, <span className="text-muted">{dog.secondary}</span>
            </p>
            {dog.about && <p>{dog.about}</p>}
            <a
              href={dog.link}
              target="_blank"
              type="button"
              onClick="ym(62302222,'reachGoal','site_dog')"
              className="my-lg-1 mr-auto btn btn-warning"
            >
              Взять на прогулку{' '}
              <span role="img" aria-label="на сайт приюта">
                🐕‍🦺
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default DogInfo;
