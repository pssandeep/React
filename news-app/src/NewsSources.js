import React, {Component} from 'react';
import './NewsSources.css';


class NewsSources extends Component {

  render(){
    console.log(this.props.sources);
    const newssources = this.props.sources.map((news, index) => {
      return (
        <div key = {news.id}>
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
    return (  
      <div>
        {newssources}
      </div>
    );
  }
}


export default NewsSources;