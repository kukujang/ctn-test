import React, { Component } from "react";
import HerobannerItem from './HerobannerItem'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import shortid from 'shortid';

class HerobannerList extends Component {

  showHerobanner() {
    if(this.props.herobanners) {
      return this.props.herobanners.map(banner=>(
        <HerobannerItem key={shortid.generate()} status={banner.status} info={banner.info} bannerimg={banner.data[0].imgurl} />
      ))
    } else {
      // no data
    }
  }

  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return(
      <div className="js-slider">
        <Slider {...settings}>
          {this.showHerobanner()}
        </Slider>
      </div>
    );
  }
}

export default HerobannerList;