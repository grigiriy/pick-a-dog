import React, { Component } from 'react';
import { Link } from 'gatsby';

class DogCard extends Component {
  render() {
    let { children } = this.props;
    return (
      <div
        className="card"
        style={{
          maxHeight: `240px`
        }}
      >
        <div className="card-body d-flex">
          {/* {children} */}
          <Link to="/kennel/">
            <div
              style={{
                backgroundImage: `url(${require('../../images/dog_preview.jpg')})`,
                backgroundSize: `cover`,
                backgroundPositionX: `center`,
                backgroundRepeat: `no-repeat`,
                minWidth: `200px`,
                height: `200px`
              }}
            ></div>
          </Link>
          <div className="d-flex flex-column p-3">
            <Link
              style={{
                color: `inherit`
              }}
            >
              <p className="h3">Шанти</p>
            </Link>
            <p>
              Лабрадор, <span className="text-muted">6 лет, девочка</span>
            </p>
            <p>м. Сокол, улица Космонавта Волкова 10 с 1</p>
            <p
              style={{
                textOverflow: `ellipsis`,
                overflow: `hidden`
              }}
            >
              Щенок-подросток, возраст около 1 года, стерилизована. Активная
              собачка, любит прогулки и бегать веселиться с друзьями собаками.
              Ласковая, общительная с людьми.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default DogCard;
