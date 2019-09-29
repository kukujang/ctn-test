import React, { Component } from "react";

export default class MenuTop extends Component {
  render() {
    return (
      <div>
        <ul className="list-unstyled list-menu-top">
          <li><a href="." className="active">Featured</a></li>
          <li><a href=".">Top</a></li>
          <li><a href=".">Topic</a></li>
        </ul>
      </div>
    );
  }
}
