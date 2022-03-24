import React, { useState, useEffect } from 'react';
import './header.css'
import {Typography,Container} from '@material-ui/core'

export default function Header() {
    const [showLinks, setShowLinks] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
      };

  const handleClick = (e) => {
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop
    setShowLinks(!showLinks);
    window.scrollTo({
      left: 0,
      top: location - 64,
    })
  }
   const changeBackground=()=>{
     if(window.scrollY>=60){
        setNavbar(true)
      }else{
        setNavbar(false)
      }
    }


  useEffect(() => {
      window.addEventListener('scroll',changeBackground) 
  })
     
    return (
        
          <nav className={navbar?'active': ''}>
            <Container>
            <div className="navbar-container">

             <Typography variant='h5'className="logo">PORTFOLIO</Typography>
            
               <ul className={!showLinks ?"list-nav":"list-nav active"} >
              
                <li className="item-nav">
                <Typography variant='subtitle1'>
                  <a href="#home" onClick={handleClick}>
                    HOME
                  </a>
                  </Typography> 
                </li>
                <li className="item-nav">
                  <Typography variant='subtitle1'>
                  <a href="#about" onClick={handleClick}>
                    ABOUT
                  </a>
                  </Typography>
                </li>
                <li className="item-nav">
                  <Typography variant='subtitle1'>
                   <a href="#project" onClick={handleClick}>
                     PROJECT
                   </a>
                  </Typography>  
                </li>
                <li className="item-nav">
                  <Typography variant='subtitle1'>
                   <a href="#contact" onClick={handleClick}>
                    CONTACT
                   </a>
                   </Typography>
                </li>
               </ul>
             
             
            
               <i className="menu fas fa-bars" onClick={toggleLinks}></i>
            </div>
            </Container>
          </nav> 

        
        
    )
}
