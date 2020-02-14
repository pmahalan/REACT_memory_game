import React, { Component } from "react";
import "./App.css";
import pictures from "./pictures.json"
import PictureCard from "./components/picturecard"

class App extends Component {

  state = {
    pictures
  };
  
  clickImage = id => {
    console.log(id)
  }

  render() {
    return (

      <div className="container">

        <h1>Priya's Clicky game</h1>

        <h2> Try to click on each of the 12 images below only once!</h2>

        <div>
          Score:
        </div>

        <div className="row">
          {this.state.pictures.map(picture => (
            <PictureCard
              id={picture.id}
              image={picture.image}
              clickImage={this.clickImage}
            />

          ))}

        </div>
      </div>
    );
  }
}

export default App;
