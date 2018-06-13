import React, {Component} from 'react';
import './Recipe.css';


class Recipe extends Component{
  render(){
    const {title, img, instructions} = this.props;
    const ingredients = this.props.ingredients.map((ing, index) => (<li key={index}>{ing}</li>));
    return(
      <div className = "recipe-card">
        <div className = "recipe-card-img">
          <img src = {img} alt = {title} />
        </div>
        <div className = "recipe-card-content">
          <h3 className = "recipe-title">{title}</h3>
          <h3>Ingredients:</h3>
          <ul>
            {ingredients}
          </ul>
          <p>{instructions}</p>
        </div>
      </div>
    );
  }
}


export default Recipe;
