import "slick-carousel/slick/slick.css";
import React, { Component } from "react";
import Slider from "react-slick";
import thumb from '../assets/img/2.jpg';

export default class SliderThumb extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerPadding: '15px',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    };
    return (
      <div className="js-slider js-slider--thumb">
        <Slider {...settings}>
          <div className="slider-item">
            <div className="item-content">
              <a href="." className="thumb"><img src={thumb} alt="alt" className="w-100" /></a>
              <a href="." className="title">God Emperor</a>
            </div>
          </div>
          <div className="slider-item">
            <div className="item-content">
              <a href="." className="thumb"><img src={thumb} alt="alt" className="w-100" /></a>
              <a href="." className="title">Reverend Insanity</a>
            </div>
          </div>
          <div className="slider-item">
            <div className="item-content">
              <a href="." className="thumb"><img src={thumb} alt="alt" className="w-100" /></a>
              <a href="." className="title">The Strongest The Strongest</a>
            </div>
          </div>
          <div className="slider-item">
            <div className="item-content">
              <a href="." className="thumb"><img src={thumb} alt="alt" className="w-100" /></a>
              <a href="." className="title">God Emperor</a>
            </div>
          </div>
          <div className="slider-item">
            <div className="item-content">
              <a href="." className="thumb"><img src={thumb} alt="alt" className="w-100" /></a>
              <a href="." className="title">Reverend Insanity</a>
            </div>
          </div>
          <div className="slider-item">
            <div className="item-content">
              <a href="." className="thumb"><img src={thumb} alt="alt" className="w-100" /></a>
              <a href="." className="title">The Strongest The Strongest</a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
