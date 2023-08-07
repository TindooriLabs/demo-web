import logo from './logo.svg';
import './App.css';

import { Routes, Route, useNavigate } from 'react-router-dom';
import Figma from './Figma';


function App() {

  return (
    <>
      <div className="App">
        <h1> home page</h1>

        <button>DEMO GO!</button>
        <a href={<Figma/>}>figma</a>


      </div>


 
    </>

  );
}

export default App;
