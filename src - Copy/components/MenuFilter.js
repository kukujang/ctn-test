import React, { Component } from "react";
import icon_1 from '../assets/img/sc_icon_tj.png';
import icon_2 from '../assets/img/sc_icon_sc.png';
import icon_3 from '../assets/img/sc_icon_pf.png';
import icon_4 from '../assets/img/sc_icon_wj.png';
import icon_5 from '../assets/img/sc_icon_rg.png';

export default class MenuFilter extends Component {
  render() {
    return (
      <div>
        <ul className="list-unstyled list-menu-filter mb-2">
          <li><a href=".">
            <span className="icon"><img src={icon_1} alt="alt" /></span>
            <span className="text">Recommend</span>
          </a></li>
          <li><a href=".">
            <span className="icon"><img src={icon_2} alt="alt" /></span>
            <span className="text">Collect</span>
          </a></li>
          <li><a href=".">
            <span className="icon"><img src={icon_3} alt="alt" /></span>
            <span className="text">Rating</span>
          </a></li>
          <li><a href=".">
            <span className="icon"><img src={icon_4} alt="alt" /></span>
            <span className="text">Completed</span>
          </a></li>
          <li><a href=".">
            <span className="icon"><img src={icon_5} alt="alt" /></span>
            <span className="text">Popular</span>
          </a></li>
        </ul>
      </div>
    );
  }
}
