import React, { Component } from "react";
import "./App.css";
import pictures from "./pictures.json"
import PictureCard from "./components/picturecard"

class App extends Component {

  state = {
    pictures
  };

  render() {
    return (

      <div className="container">
        <div className="row">
          {this.state.pictures.map(picture => (
            <PictureCard
              id={picture.id}
              image={picture.image}
            />

          ))}

        </div>
      </div>
    );
  }
}

export default App;
