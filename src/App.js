import React from "react";
import "./App.css";
import Car from "./Car";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />

      <div className="app__child">
        <Car img="images/Desktop-ModelY.png" />
      </div>
      <div className="app__child">
        <Car img="images/Desktop-ModelX.png" />
      </div>
      <div className="app__child">
        <Car img="images/Desktop-Model3.png" />
      </div>
      <div className="app__child">
        <Car img="images/Desktop-ModelS.png" />
      </div>
      <div className="app__child">
        <Car img="images/Desktop-SolarPanels.png" />
      </div>
      <div className="app__child">
        <Car img="images/Desktop-SolarRoof.png" />
      </div>
      <div className="app__child">
        <Car img="images/Desktop-Accessories.png" />
      </div>
    </div>
  );
}

export default App;
