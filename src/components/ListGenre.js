import React, { Component } from "react";
import shortid from 'shortid';
import {Link} from 'react-router-dom';

export default class ListGenre extends Component {
  showContent() {
    if(this.props.contents) {
      return this.props.contents[0].data[4].Categories.map(content=>(
        <li key={shortid.generate()}><Link to="/category">{content.CategoryName}</Link></li>
      ))
    }
  }
  render() {
    return (
      <div>
        <ul className="list-unstyled list-menu-genre">
          {this.showContent()}
        </ul>
      </div>
    );
  }
}
