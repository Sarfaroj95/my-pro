import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { Header } from "./components/header/Header"
import { Body } from "./components/bodypart/Body"



function App() {
  return (
    <div className="App">
      <Header />
      <Body />

    </div>
  );
}

export default App;
