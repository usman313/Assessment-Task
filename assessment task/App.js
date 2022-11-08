import './App.css';
import Multiplier from './components/Multiplier';
import Subtraction from './components/Subtraction';
import Divider from './components/Divider';
import Counter from './components/Counter';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
    <>

        <Multiplier/>
        <Subtraction/>
        <Divider/>
        <Counter/>

    </>
  );
}

export default App;
