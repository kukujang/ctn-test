import React, { Component } from "react";

class HerobannerItem extends Component {
  render() {
    const {bannerimg} = this.props;
    return(
      <div className="slider-item">
        <img src={bannerimg} alt="alt" className="w-100" />
      </div>
    );
  }
}

export default HerobannerItem;