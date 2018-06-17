import React, {Component} from 'react';
import './NewsListing.css';

class NewsListing extends Component {
  constructor(props){
    super(props);
    console.log("NEWS LISTING CONSTRUCTOR");
    this.state = {
      articles : []
    }
  }
  componentDidMount(){
    console.log("NEWSLISTING CONPONENTDIDMOUNT");
  }

  componentWillMount(){
    console.log("NEWSLISTING COMPONENTWILLMOUNT");
    const url = "https://newsapi.org/v2/top-headlines?sources=the-hindu&apiKey=edecb80fd4bb4ddab1ae89a47172a368";
    fetch(url)
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        response.json().then((data) => {
          console.log(data);
          this.setState({articles : data.articles});
        });
      }
    )
  }

  render() {
    console.log("NEWSLISTING RENDER");
    const articles = this.state.articles;
    const newsList = articles.map((news, i) => {
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