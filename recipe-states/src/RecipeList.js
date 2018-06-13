import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';



class RecipeList extends Component {
  static defaultProps = {

    recipes : [
      {
        title : "Pasta",
        ingredients : ["flour", "water"],
        instructions : "Mix Ingredients",
        img : "Spaghetti.jpg"      
      },
      {
        title : "Bolognese",
        ingredients : ["flour", "water"],
        instructions : "Mix Ingredients",
        img : "Bolognese.jpg"
      },
      {
        title : "Pizza",
        ingredients : ["flour", "water"],
        instructions : "Mix Ingredients",
        img : "Pizza.jpg"
      }
    ]

  }

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.objectOf).isRequired
  }

  render(){

    const recipes = this.props.recipes.map((r,index) => <Recipe key = {index} {...r}/>);
    return(
      <div className = "recipe-list">
        {recipes}
      </div>
    )
  }
}

export default RecipeList;