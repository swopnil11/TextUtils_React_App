import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        {/*<Navbar/>*/}
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode = {mode} />}></Route>
            <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter And More" mode={mode}/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>  
    </>
  );
}
export default App;