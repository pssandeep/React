import React, { Component } from 'react';
// import logo from './logo.svg';
// import Recipe from './Recipe';
import RecipeList from './RecipeList';
import './RecipeApp.css';
import Navbar from './Navbar';


class RecipeApp extends Component {

  render() {

    // const recipes = [
    //   {
    //     title : "pasta",
    //     ingredients : ["flour", "water"],
    //     instructions : "Mix Ingredients",
    //     img : "Spaghetti.jpg"      
    //   },
    //   {
    //     title : "Bolognese",
    //     ingredients : ["flour", "water"],
    //     instructions : "Mix Ingredients",
    //     img : "Bolognese.jpg"
    //   },
    //   {
    //     title : "Pizza",
    //     ingredients : ["flour", "water"],
    //     instructions : "Mix Ingredients",
    //     img : "Pizza.jpg"
    //   }
    // ];
    return (
      <div className="App">
        <Navbar />
        <RecipeList/>
        {/* {recipes.map((r,index) => (<Recipe key = {index} title = {r.title} ingredients = {r.ingredients}
        instructions = {r.instructions} img = {r.img} />))} */}
      </div>
        // <Recipe
        //   title = "Bolognese"
        //   ingredients = {["flour", "water"]}
        //   instructions = "Mix Ingredients"
        //   img = "Bolognese.jpg"
        // />
        // <Recipe
        //   title = "Pizza"
        //   ingredients = {["flour", "water"]}
        //   instructions = "Mix Ingredients"
        //   img = "Pizza.jpg"
        // />
      
    );
  }
}

export default RecipeApp;
