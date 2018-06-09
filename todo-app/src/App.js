import React, { Component } from 'react';
import './App.css';

const ToDoList = (props) =>  {
    return (props.todos.map((todo, i) => {
        return <li key = {i}>{todo}</li>
    }));
}


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todo : [],
      newTodo : '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    console.log(e.target.value);
    this.setState({newTodo : e.target.value});
  }


  handleSubmit(e){
    e.preventDefault();
    let alltodos = [...this.state.todo, this.state.newTodo];
    this.setState({
      todo : alltodos,
      newTodo : '',
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Simple ToDo App Using React</h2>
        <form onSubmit = {this.handleSubmit}>
          <input 
            type = 'text'
            name = 'newTodo'
            value = {this.state.newTodo}
            onChange = {this.handleChange}
          />
          <button type = 'submit'>Submit</button>
        </form>
        <ol>
        <ToDoList todos = {this.state.todo}/>
        </ol>
      </div>
    );
  }
}

export default App;
