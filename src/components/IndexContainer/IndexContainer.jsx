import React, { Component } from 'react';

import '../../assets/scss/styles.scss';
import SubInfo from '../SubInfo';
import DogsList from '../DogsList';
import YMap from '../YMap';

const cw =
  typeof window === 'undefined' || !window.document ? 0 : window.innerWidth;

class IndexContainer extends Component {
  state = {
    map: false,
    mobile: false,
    // mobile: cw < 992 ? true : false,
  };

  toggleTab = (e) => {
    this.setState({ map: !this.state.map });
  };

  if_mobile = ($cw) => {
    this.setState({ mobile: $cw < 992 ? true : false });
  };

  componentDidMount() {
    this.if_mobile(cw);
  }

  render() {
    let active_tab =
      this.state.mobile && this.state.map
        ? 'active_map'
        : this.state.mobile && !this.state.map
        ? 'active_list'
        : '';

    return (
      <>
        <div className="row z-1">
          <SubInfo toggleTab={this.toggleTab} active_tab={active_tab} />
        </div>
        <div className={'row z-0 container mx-auto ' + active_tab}>
          <div className="col-xl-6 col-lg-7 px-0 list_block">
            <DogsList />
          </div>
          <div className="col-xl-6 col-lg-5 px-0 mx-lg-auto mx-ncustom map_block">
            <YMap mobile={this.state.mobile} />
          </div>
        </div>
      </>
    );
  }
}
export default IndexContainer;
