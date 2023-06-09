import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './comps/navbar';
import Homepage from './comps/homepage';
import Aboutpage from './comps/about';
import Edupage from './comps/edu';
import Skillpage from './comps/skills';
import Contactpage from './comps/contact';
function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/my-resume' element={<Homepage/>}/>
      <Route path='/about' element={<Aboutpage/>}/>
      <Route path='/skills' element={<Skillpage/>}/>
      <Route path='/contact' element={<Contactpage/>}/>
      <Route path='/education' element={<Edupage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
