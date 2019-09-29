import React, { Component } from "react";
import icon_6 from '../assets/img/sj.png';
import icon_7 from '../assets/img/sc.png';
import icon_8 from '../assets/img/sd.png';
import {NavLink} from 'react-router-dom';

export default class MenuFixed extends Component {
  render() {
    return (
      <div className="bar-fixed">
        <ul className="list-unstyled list-menu-main">
          <li><NavLink to="/library" activeClassName="active">
            <span className="icon"><img src={icon_6} alt="alt" /></span>
            <span className="text">Library</span>
          </NavLink></li>
          <li><NavLink to="/" exact activeClassName="active">
            <span className="icon"><img src={icon_7} alt="alt" /></span>
            <span className="text">Home</span>
          </NavLink></li>
          <li><NavLink to="/ranking" activeClassName="active">
            <span className="icon"><img src={icon_8} alt="alt" /></span>
            <span className="text">Ranking</span>
          </NavLink></li>
        </ul>
      </div>
    );
  }
}
