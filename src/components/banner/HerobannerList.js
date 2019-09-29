import React, { Component } from "react";
import HerobannerItem from './HerobannerItem'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import shortid from 'shortid';

class HerobannerList extends Component {

  constructor(props) {
		super(props);
		this.state = {herobanners: ""};
  }

  componentDidMount() {

		/*fetch("https://api.webnovelsapp.com/v5/base/banner_man.html",{method:"GET"})
		.then(res_banner=>res_banner.json())
		//.then(res_banner=>{console.log(res_banner)})
		.then(res_banner=>{this.setState({herobanners:res_banner})})*/

		this.setState({
			herobanners: [
				{
					"status": 1,
					"info": "111111",
					"data": [
						{
							"type": "booklist",
							"param": "1",
							"imgurl": "https://down.webnovelsapp.com/shudan/images/1.jpg"
						}
					]
				},
				{
					"status": 1,
					"info": "222222",
					"data": [
						{
							"type": "booklist",
							"param": "1",
							"imgurl": "https://down.webnovelsapp.com/shudan/images/1.jpg"
						}
					]
				},
				{
					"status": 1,
					"info": "333333",
					"data": [
						{
							"type": "booklist",
							"param": "1",
							"imgurl": "https://down.webnovelsapp.com/shudan/images/1.jpg"
						}
					]
				}
			]
		});
	}
  
  showHerobanner() {
    if(this.state.herobanners) {
      return this.state.herobanners.map(banner=>(
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