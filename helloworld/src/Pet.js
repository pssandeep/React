import React, {Component} from 'react';
import './Pet.css'


class Hobbies extends Component{
  render(){
      const liStyle = {fontSize: '1em'};
      const hobbies = ["FIRST", "SECOND", "THIRD","FOURTH"];                 
      return(
          <ul style={liStyle}>
                  { 
                      hobbies.map((h,i) => { 
                          return <li key={i} style={liStyle}> {h} </li>
                      }) 
                  } 
          </ul>
      )
  }
} 
class Pet extends Component{ 
  render(){ 
      return (
          <div className="card">
              <h2 className="name">MOXIE</h2>
              <img src="https://images.unsplash.com/photo-1502656109408-152680a8ad1c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=40e160d54f5831df3d12204916d8edb1&auto=format&fit=crop&w=500&q=60"
                  alt="MOVIE" />
              <h5 style={{fontSize: '2em', margin: '2px'}}>HOBBIES</h5>
              <Hobbies />
          </div>
      ); 
  }
}


export default Pet;