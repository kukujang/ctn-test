import React, { Component } from "react";
import ContentItem from './ContentItem';
import _ from 'lodash';

class ContentList extends Component {

  constructor() {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount(){
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  showContent() {

    var api_content = [
      
    ];

    //const data_conetnt = this.props.contents;
    //console.log(data_conetnt);
    //console.log( _.map(api_content,'data[3].Books') );

    //console.log(_.map(api_content,'data[3].Books[0].Id'));

    /*if(this.props.contents) {
      return this.props.contents.map(content=>(
        <ContentItem category={content.category} />
      ))
    } else {
      // no data
    }*/

    this.setState({ 'items': api_content, 'isLoading': false })

  }

  render() {
    const {highlight} = this.props;
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        

        <div>
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
          <ul className={"list-unstyled list-content-thumb clearfix " + highlight }>
              {this.state.items.map(function (item, index) {
                  //console.log(item.category.indexOf("1") != 01)
                  if (item.category.id === 1){ //.id
                      return <ContentItem item={item} key={index} />
                  }
              })}
          </ul>
      </div>

      );
    }
  }
}

export default ContentList;
