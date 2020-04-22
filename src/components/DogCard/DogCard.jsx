import React, { Component } from 'react';
import { Link } from 'gatsby';

class DogCard extends Component {
  render() {
    const { dog } = this.props;
    return (
      <div className="card">
        <div className="card-body d-sm-flex">
          <Link to={dog.parent.name}>
            <div
              className="dogImage"
              style={{
                backgroundImage: `url(${require('../../images/' + dog.image)})`,
              }}
            ></div>
          </Link>
          <div className="d-flex flex-column p-3">
            <Link
              to={dog.parent.name}
              style={{
                color: `inherit`,
              }}
            >
              <p className="h3">{dog.name}</p>
            </Link>
            <p>
              {dog.main}, <span className="text-muted">{dog.secondary}</span>
            </p>
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
export default DogCard;
