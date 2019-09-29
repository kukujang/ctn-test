import React, { Component } from "react";

class ContentItem extends Component {
  render() {
    const {name,desc,author,cname,thumbimg} = this.props;
    return (
      <div className="item-content">
        <a href="." className="thumb"><img src={'https://api.webnovelsapp.com/BookFiles/BookImages/'+thumbimg} alt="alt" className="w-100" /></a>
        <a href="." className="title">{name}</a>
        <div className="desc">{desc}</div>
        <div className="author">{author}</div>
        <div className="cname">{cname}</div>
      </div>
    );
  }
}

export default ContentItem;
