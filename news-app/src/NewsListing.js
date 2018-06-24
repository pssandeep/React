import React, {Component} from 'react';
import './NewsListing.css';

class NewsListing extends Component {
  constructor(props){
    super(props);
    console.log("NEWSLISTING CONSTRUCTOR");
  }
  componentDidMount(){
    console.log("NEWSLISTING CONPONENTDIDMOUNT");
  }

  componentWillMount(){
    console.log("NEWSLISTING COMPONENTWILLMOUNT");
  }

  render() {
    console.log("NEWSLISTING RENDER");
    let {articles} = this.props;
    let newsList = articles.map((news, i) => {
      return (
        <div key = {i} className = "NewsListing">
          <div className = "Img">
            <img  className = "NewsImages" src = {news.urlToImage} alt = {news.title}/>
          </div>
          <div className = "NewsDetails">
            <p><small>Souce : {news.source.name}</small></p>
            <p><strong><a href = {news.url} target = "_blank">{news.title}</a></strong></p>
            <p>{news.description.substring(0,100)}...</p>
            <p><small>Date : {news.publishedAt}</small></p>
            {/* <a href = {news.url} target = "_blank"> Full Story </a> */}
          </div>
        </div>
      )
    });

    return (
      <div className = "NewsListingHeader">
        <h3>Today's News Headlines - {this.props.currentSourceName}</h3>
        {newsList}
      </div>
    );
  }
}

export default NewsListing;