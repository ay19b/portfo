import React from 'react';
import './App.css'
import About from './component/about';
import Contact from './component/contact';
import Header from './component/header'
import Home from './component/home'
import Project from './component/project';

function App() {
  return (
    
   <>
        <Header />
        <Home />
        <About />
        <Project />
        <Contact />
  
   </>
  );
}

export default App;