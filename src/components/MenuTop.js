import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

export default class MenuTop extends Component {
  render() {
    return (
      <div>
        <ul className="list-unstyled list-menu-top">
          <li><NavLink to="/filter/featured" activeClassName="active">Featured</NavLink></li>
          <li><NavLink to="/filter/top">Top</NavLink></li>
          <li><NavLink to="/filter/topic">Topic</NavLink></li>
        </ul>
      </div>
    );
  }
}
