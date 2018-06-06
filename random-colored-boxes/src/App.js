import React, { Component } from 'react';
import './App.css';

const NO_OF_BOXES = 1000;

const Box = (props) => {

  const boxStyle = {
    backgroundColor : '#'+ props.color,
    color : 'red',
    height : '45px',
    width : '45px',
    display: 'inline-block',
  };

  return (
    <div style = {boxStyle}></div>
  )

}

class App extends Component {
  
  constructor(props) {
    super(props);
    const boxes = Array(NO_OF_BOXES).fill().map(this.getRandomColor,this);
    this.state = {boxes}

    setInterval(() => {
      const boxes = this.state.boxes.slice();
      const randomBoxIndex = Math.floor(Math.random() * boxes.length);
      boxes[randomBoxIndex] = this.getRandomColor();
      this.setState({boxes});
    },100);
  }

  getRandomColor () {

    let randomColor = Array(6).fill(null).map(() => (this.props.hexadecimal[Math.floor(Math.random() * this.props.hexadecimal.length)]));
    // this.props.hexadecimal[Math.floor(Math.random() * this.props.hexadecimal.length)];
    let newColor = randomColor.join("");
    console.log(newColor);
    return newColor;
  }
  
  render() {

    const boxes = this.state.boxes.map((color, index) => (<Box color = {color} key = {index}/>));

    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"],
  hexadecimal : ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
};

export default App;
