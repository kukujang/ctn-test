import React, { Component } from "react";
import thumb from '../../assets/img/2.jpg';

class ContentItem extends Component {

  constructor(props) {
    super(props);
    //console.log(props.category);
  }

  render() {
    return (
      <li>
        <div className="item-content">
          <a href="." className="thumb"><img src={thumb} alt="alt" className="w-100" /></a>
          <a href="." className="title">The Strongest The Strongest The Strongest The Strongest</a>
          <div className="desc">Eight hundred years ago, a legendary man passed away. Zhang Ruochen, the son of Emperor Ming, was killed by his fiancée, Princess Chi Yao. Then, eight hundred years after his death, he came back, only</div>
          <div className="author">Flying fish</div>
          <div className="cname">Fantasy</div>
        </div>
      </li>
    );
  }
}

export default ContentItem;
