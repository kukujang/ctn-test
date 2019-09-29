import React, { Component } from "react";
import icon_1 from '../assets/img/sc_icon_tj.png';
import icon_2 from '../assets/img/sc_icon_sc.png';
import icon_3 from '../assets/img/sc_icon_pf.png';
import icon_4 from '../assets/img/sc_icon_wj.png';
import icon_5 from '../assets/img/sc_icon_rg.png';
import {Link} from 'react-router-dom';

export default class MenuFilter extends Component {
  render() {
    return (
      <div>
        <ul className="list-unstyled list-menu-filter mb-2">
          <li><Link to="/category">
            <span className="icon"><img src={icon_1} alt="alt" /></span>
            <span className="text">Recommend</span>
          </Link></li>
          <li><Link to="/category">
            <span className="icon"><img src={icon_2} alt="alt" /></span>
            <span className="text">Collect</span>
          </Link></li>
          <li><Link to="/category">
            <span className="icon"><img src={icon_3} alt="alt" /></span>
            <span className="text">Rating</span>
          </Link></li>
          <li><Link to="/category">
            <span className="icon"><img src={icon_4} alt="alt" /></span>
            <span className="text">Completed</span>
          </Link></li>
          <li><Link to="/category">
            <span className="icon"><img src={icon_5} alt="alt" /></span>
            <span className="text">Popular</span>
          </Link></li>
        </ul>
      </div>
    );
  }
}
