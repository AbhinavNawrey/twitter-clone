import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import Feed from "./Feed"; 
import Widgets from "./Widgets";

function App() {
  return (
    //BEM CONVENTION
    <div className="app">

      {/*side bar */}
      <Sidebar /> 

      {/*Feeds */}
      <Feed />

      {/*Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
