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
      showForm : false,      
    }
      this.handleSave = this.handleSave.bind(this);

  }

  handleSave(recipe){
    this.setState((prevState,props) => {
      const newRecipe = {...recipe,id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm : false
      }
    });
  }

  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe = {() => this.setState({showForm : true})}/>
        {showForm 
          ? <RecipeInput 
              onSave = {this.handleSave}
              onClose = {() => this.setState({showForm : false})} 
            />
          : null
        }
        <RecipeList recipes = {this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;
