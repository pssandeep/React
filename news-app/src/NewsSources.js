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

    // const categories = (
    //   <div>
    //     <button 
    //       id = "business" 
    //       type = 'button'   
    //       title = "business"
    //       onClick = {this.props.onCategoryClick}
    //     >
    //       business
    //     </button>
    //     <button 
    //       id = "entertainment" 
    //       type = 'button' 
    //       title = "entertainment"
    //       onClick = {this.props.onCategoryClick}
    //     >
    //       entertainment
    //     </button>
    //     <button 
    //       id = "general" 
    //       type = 'button' 
    //       title = "general"
    //       onClick = {this.props.onCategoryClick}
    //     >
    //       general
    //     </button>
    //     <button 
    //       id = "health" 
    //       type = 'button' 
    //       title = "health"
    //       onClick = {this.props.onCategoryClick}
    //     >
    //       health
    //     </button>
    //     <button 
    //       id = "science" 
    //       type = 'button' 
    //       title = "science"
    //       onClick = {this.props.onCategoryClick}
    //     >
    //       science
    //     </button> 
    //     <button 
    //       id = "sports" 
    //       type = 'button' 
    //       title = "sports"
    //       onClick = {this.props.onCategoryClick}
    //     >
    //       sports
    //     </button>
    //     <button 
    //       id = "technology" 
    //       type = 'button' 
    //       title = "technology"
    //       onClick = {this.props.onCategoryClick}
    //     >
    //       technology
    //     </button>
    //   </div>                                    
    // );

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
        {/* {categories} */}
      </div>
    );
  }
}


export default NewsSources;