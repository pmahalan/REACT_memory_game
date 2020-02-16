import React, { Component } from "react";
import "./App.css";
import pictures from "./pictures.json"
import PictureCard from "./components/picturecard"

class App extends Component {

  state = {
    pictures,
    clickedPics: [],
    score: 0
  };

  clickImage = id => {
    console.log(id)
    // check if id is in clickPics 
    // store id in the clickpics array
    let isInArray = this.state.clickedPics.includes(id)

    if (isInArray == true) {
      console.log("Oops, You lost!")
      this.setState({ clickedPics: [], score: 0})

    } else {
      console.log("good job!")
      this.setState({ clickedPics: [...this.state.clickedPics, id], score: this.state.score+1 })

    }

    let shuffledArray = this.shuffle(this.state.pictures)
    this.setState({pictures: shuffledArray})

  }

  shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  render() {
    return (

      <div className="container">

        <h1>Priya's Clicky game</h1>

        <h2> Try to click on each of the 12 images below only once!</h2>

        <div>
          Score:{this.state.score}
        </div>

        <div className="row">
          {this.state.pictures.map(picture => (
            <PictureCard
              id={picture.id}
              image={picture.image}
              clickImage={this.clickImage}
              //key={this.key}
            />

          ))}

        </div>
      </div>
    );
  }
}

export default App;
