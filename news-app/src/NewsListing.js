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
            <p>Souce : {news.source.name}</p>
            <p>Title : {news.title}</p>
            <p>Description : {news.description}</p>
            <p>Date : {news.publishedAt}</p>
            <a href = {news.url} target = "_blank"> Full Story </a>
          </div>
        </div>
      )
    });

    return (
      <div className = "NewsListingHeader">
        <h4>Today's News Headlines</h4>
        {newsList}
      </div>
    );
  }
}

export default NewsListing;