import React, { Component } from "react";
import {Link} from 'react-router-dom';

class ContentItem extends Component {
  render() {
    const {name,desc,author,cname,thumbimg} = this.props;
    return (
      <div className="item-content">
        <Link to="/content" className="thumb"><img src={'https://api.webnovelsapp.com/BookFiles/BookImages/'+thumbimg} alt="alt" className="w-100" /></Link>
        <Link to="/content" className="title">{name}</Link>
        <div className="desc">{desc}</div>
        <div className="author">{author}</div>
        <div className="cname">{cname}</div>
      </div>
    );
  }
}

export default ContentItem;
