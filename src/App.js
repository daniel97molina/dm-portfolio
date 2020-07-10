import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Landpage from "./Components/Landpage";

function App(props) {

  return (
    <div className="App">
      <Header/>
      <Landpage />
    </div>
  );
}

export default App;
