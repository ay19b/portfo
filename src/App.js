import React from 'react';
import './App.css'
import { theme } from './component/theme';
import About from './component/about';
import Contact from './component/contact';
import Header from './component/header'
import Home from './component/home'
import Project from './component/project';
import {ThemeProvider,responsiveFontSizes,Container} from '@material-ui/core';

let Theme = responsiveFontSizes(theme);
function App() {
  return (
    
   <>
   <ThemeProvider theme={Theme}>
     
        <Header />
        <Home />
        <About />
        <Project />
        <Contact />
   
    </ThemeProvider> 
   </>
  );
}

export default App;