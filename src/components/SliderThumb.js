import "slick-carousel/slick/slick.css";
import React, { Component } from "react";
import Slider from "react-slick";
import ContentItem from './content/ContentItem';
import shortid from 'shortid';

export default class SliderThumb extends Component {
  showContent() {
    if(this.props.contents && this.props.category==="Recommended") {
      return this.props.contents[0].data[2].Books.map(content=>(
        <div className="slider-item" key={shortid.generate()}>
          <ContentItem name={content.Name} desc={content.Desc} author={content.Author} cname={content.CName} thumbimg={content.Img} />
        </div>
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
          {this.showContent()}
        </Slider>
      </div>
    );
  }
}
