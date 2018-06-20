import React, { Component } from 'react';
import './App.css';
import NewsListing from './NewsListing';
import NewsSources from './NewsSources';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading : true,
      sources : [],
      articles : [],
      currentSource :'the-hindu',
      country : 'us',
      language : 'en',
      category : 'general',
      possibleCountries : []
      
    }

    this.handleNewsButtonClick = this.handleNewsButtonClick.bind(this);
    this.fetchNewsListing = this.fetchNewsListing.bind(this);
    this.fetchNewsSources = this.fetchNewsSources.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    // this.handleCatClick = this.handleCatClick.bind(this);
    this.fetchNewsListing(this.state.currentSource);
  }

  componentWillMount(){
    console.log("APP COMPONENTWILLMOUNT");
    this.fetchNewsSources();

  }

  

  fetchNewsSources(){
    console.log("APP fetchNewsSources");
    let url = "https://newsapi.org/v2/sources?apiKey=edecb80fd4bb4ddab1ae89a47172a368";
    fetch(url)
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        response.json().then((data) => {
          console.log(data.sources);
          let allCountriesWithDup = data.sources.map((source, index) => {
            return source.country;
          });
          let possibleCountries = [...new Set(allCountriesWithDup)];
          console.log(possibleCountries);
          this.setState({
              sources : data.sources,  
              possibleCountries : possibleCountries });
        });
      }
    )
  }


  fetchUpdatedNewsSources(selectedCountry){
    console.log("APP fetchNewsSources");
    let url = "https://newsapi.org/v2/sources?apiKey=edecb80fd4bb4ddab1ae89a47172a368";
    url = selectedCountry !== undefined ? `${url}&country=${selectedCountry}` : url;
    console.log(url);
    fetch(url)
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        response.json().then((data) => {
          console.log(data.sources);
          this.setState({
              sources : data.sources, 
              country : selectedCountry});
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

  // handleCatClick(){

  // }

  onSelectChange(e){
    console.log("onSelectChange");
    const country = e.target.value;
    console.log(country);
    this.fetchUpdatedNewsSources(country);

  }

  render() {
    console.log("APP RENDER");
    const NS = 
      <NewsSources 
        sources = {this.state.sources} 
        onClick = {this.handleNewsButtonClick} 
        onSelectChange = {this.onSelectChange}
        country = {this.state.country}
        possibleCountries = {this.state.possibleCountries}
      />;
    const NL = <NewsListing  articles = {this.state.articles}/>
    return (
      <div className="App">
        <h1>The News App</h1>
        {NS}
        {NL}
      </div>
    );
  }
}

export default App;
