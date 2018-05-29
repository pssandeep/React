import React, { Component } from 'react';
// import logo from './logo.svg';
import Recipe from './Recipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe
          title = "pasta"
          ingredients = {["flour", "water"]}
          instructions = "Mix Ingredients"
          img = "Spaghetti.jpg"
        />
        <Recipe
          title = "Bolognese"
          ingredients = {["flour", "water"]}
          instructions = "Mix Ingredients"
          img = "Bolognese.jpg"
        />
        <Recipe
          title = "Pizza"
          ingredients = {["flour", "water"]}
          instructions = "Mix Ingredients"
          img = "Pizza.jpg"
        />
      </div>
    );
  }
}

export default RecipeApp;
