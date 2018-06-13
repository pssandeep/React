import React, { Component } from 'react';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import './RecipeApp.css';
import Navbar from './Navbar';


class RecipeApp extends Component {

  constructor(props){
    super(props);

    this.state = {
      recipes : [
        {
          id : 0,
          title : "Pasta",
          ingredients : ["flour", "water"],
          instructions : "Mix Ingredients",
          img : "Spaghetti.jpg"      
        },
        {
          id : 1,
          title : "Bolognese",
          ingredients : ["flour", "water"],
          instructions : "Mix Ingredients",
          img : "Bolognese.jpg"
        },
        {
          id : 2,
          title : "Pizza",
          ingredients : ["flour", "water"],
          instructions : "Mix Ingredients",
          img : "Pizza.jpg"
        }
      ],
      nextRecipeId : 3,      
    }
  }

  render() {

    return (
      <div className="App">
        <Navbar />
        <RecipeInput/>
        <RecipeList recipes = {this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;
