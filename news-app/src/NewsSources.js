import React, {Component} from 'react';
import './NewsSources.css';


class NewsSources extends Component {

  render(){
    console.log(this.props.sources);
    const newssources = this.props.sources.map((news, index) => {
      return (
        <div key = {news.id} className = "NewsSourceButton">
            <button 
              id = {news.id} 
              type = 'button' 
              title = {news.description}
              onClick = {this.props.onClick}
            >
              {news.name}
            </button>
        </div>
      );
    });

    const possibleCountries = this.props.possibleCountries.map((country, index) => {
      return <option key = {index} value = {country}> {country} </option>;
    });

    const countrySelect= (
      <div>
        <select value = {this.props.country} name = 'country' onChange = {this.props.onSelectChange}>
          {possibleCountries}
        </select>  
      </div>
    ); 

    return (  
      <div>
        {countrySelect}
        {newssources}
      </div>
    );
  }
}


export default NewsSources;