import React, { Component } from 'react';
import { Link } from 'gatsby';

class DogInfo extends Component {
  render() {
    const { dog } = this.props;
    return (
      <div className="p-md-5 p-3">
        <div className="row">
          <img
            className="w-100 d-block mx-auto col-md-5"
            src={require('../../images/' + dog.image)}
            alt=""
          />
          <div className="d-flex flex-column col-md-7">
            <p className="h3 pt-3 pt-md-0">{dog.name}</p>
            <p>
              {dog.main}, <span className="text-muted">{dog.secondary}</span>
            </p>
            {dog.about && <p>{dog.about}</p>}
            <Link
              to={dog.parent.name}
              type="button"
              className="my-lg-1 mr-auto btn btn-warning"
            >
              Взять на прогулку{' '}
              <span role="img" aria-label="на сайт приюта">
                🐕‍🦺
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default DogInfo;
