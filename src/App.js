import React from 'react';
import './App.css'
import { theme } from './component/theme';
import About from './component/about/about';
import Contact from './component/contact/contact';
import Header from './component/header/header'
import Home from './component/home/home'
import Project from './component/project/project';
import {ThemeProvider,responsiveFontSizes} from '@material-ui/core';

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