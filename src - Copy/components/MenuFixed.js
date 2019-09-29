import React, { Component } from "react";
import icon_6 from '../assets/img/sj.png';
import icon_7 from '../assets/img/sc.png';
import icon_8 from '../assets/img/sd.png';

export default class MenuFixed extends Component {
  render() {
    return (
      <div className="bar-fixed">
        <ul className="list-unstyled list-menu-main">
          <li><a href=".">
            <span className="icon"><img src={icon_6} alt="alt" /></span>
            <span className="text">Library</span>
          </a></li>
          <li><a href=".">
            <span className="icon"><img src={icon_7} alt="alt" /></span>
            <span className="text">Home</span>
          </a></li>
          <li><a href=".">
            <span className="icon"><img src={icon_8} alt="alt" /></span>
            <span className="text">Ranking</span>
          </a></li>
        </ul>
      </div>
    );
  }
}
