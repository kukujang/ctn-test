import React, { Component } from "react";
import ContentItem from './ContentItem';
import shortid from 'shortid';
//import _ from 'lodash';

class ContentList extends Component {
  showContent() {
      switch (this.props.contents && this.props.category) {
        case "New":
          return this.props.contents[0].data[0].Books.map(content=>(
            <li key={shortid.generate()}>
              <ContentItem name={content.Name} desc={content.Desc} author={content.Author} cname={content.CName} thumbimg={content.Img} />
            </li>
          ))
        case "Top":
          return this.props.contents[0].data[1].Books.map(content=>(
            <li key={shortid.generate()}>
              <ContentItem name={content.Name} desc={content.Desc} author={content.Author} cname={content.CName} thumbimg={content.Img} />
            </li>
          ))
        case "Completed":
          return this.props.contents[0].data[3].Books.map(content=>(
            <li key={shortid.generate()}>
              <ContentItem name={content.Name} desc={content.Desc} author={content.Author} cname={content.CName} thumbimg={content.Img} />
            </li>
          ))
        default: 
          return <li className="no-data">No Data</li>
      }
  }
  render() {
    const {highlight} = this.props;
    return (
      <div>
        <ul className={"list-unstyled list-content-thumb clearfix " + highlight }>
          {this.showContent()}
        </ul>
      </div>
    );
  }
}

export default ContentList;
