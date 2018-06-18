import React, {Component} from 'react';
import './NewsSources.css';


class NewsSources extends Component {

  constructor(props){
    super(props);

    this.state = {
      sources : []
    }
  }

  componentWillMount(){
    console.log("NEWSOURCE COMPONENTWILLMOUNT");
    const url = "https://newsapi.org/v2/sources?apiKey=edecb80fd4bb4ddab1ae89a47172a368&language=en&country=in";
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

  render(){

    const newssources = this.state.sources.map((news, index) => {
      return (
        <div key = {news.id}>
            <button key = {news.id} type = 'button' title = {news.description}>{news.name}</button>
        </div>
      );
    });
    return (  
      <div>
        {newssources}
      </div>
    );
  }
}


export default NewsSources;