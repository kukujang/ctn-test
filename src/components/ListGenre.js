import React, { Component } from "react";
import shortid from 'shortid';

export default class ListGenre extends Component {
  showContent() {
    if(this.props.contents) {
      return this.props.contents[0].data[4].Categories.map(content=>(
        <li key={shortid.generate()}><a href=".">{content.CategoryName}</a></li>
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
