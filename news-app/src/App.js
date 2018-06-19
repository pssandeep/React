import React, { Component } from 'react';
import './App.css';
import NewsListing from './NewsListing';
import NewsSources from './NewsSources';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      sources : [],
      articles : [],
      currentSource :'the-hindu',
      country : 'us',
      language : 'en',
      category : 'general'
    }

    this.handleNewsButtonClick = this.handleNewsButtonClick.bind(this);
    this.fetchNewsListing = this.fetchNewsListing.bind(this);
    this.fetchNewsListing(this.state.currentSource);
  }

  componentWillMount(){
    console.log("APP COMPONENTWILLMOUNT");
    const url = "https://newsapi.org/v2/sources?apiKey=edecb80fd4bb4ddab1ae89a47172a368&language=en&country=us";
    fetch(url)
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        response.json().then((data) => {
          console.log(data.sources);
          this.setState({sources : data.sources});
        });
      }
    )
  }


  fetchNewsListing(newsid){
    console.log("APP fetchNewsListing");
    const baseUrl = "https://newsapi.org/v2/top-headlines?apiKey=edecb80fd4bb4ddab1ae89a47172a368";
    const url = baseUrl +"&sources="+ newsid //"&sources=the-hindu"
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

  handleNewsButtonClick(e){
    console.log(e.target.id +  " -- handleNewsButtonClick");
    this.fetchNewsListing(e.target.id);
    this.setState({
      currentSource : e.target.id,
    });
  }

  render() {
    console.log("APP RENDER");
    return (
      <div className="App">
        <h1>The News App</h1>
        <NewsSources sources = {this.state.sources} onClick = {this.handleNewsButtonClick}/>
        <NewsListing  articles = {this.state.articles}/>
      </div>
    );
  }
}

export default App;
