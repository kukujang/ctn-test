import React, { Component } from "react";

export default class ListGenre extends Component {
  render() {
    return (
      <div>
        <ul className="list-unstyled list-menu-genre">
          <li className="blue"><a href=".">Fantasy</a></li>
          <li className="orange"><a href=".">Fantasy</a></li>
          <li className="green"><a href=".">Fantasy</a></li>
        </ul>
      </div>
    );
  }
}
