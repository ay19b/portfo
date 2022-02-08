import React, { useState, useEffect } from 'react';
import './header.css'
import {Typography} from '@material-ui/core'

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
    changeBackground()
    window.addEventListener('scroll',changeBackground)  
  })
     
    return (
        
          <nav className={navbar?'active': ''}>
            <div className="navbar-container">
             <Typography variant='h5'className="logo" >PORTFOLIO</Typography>
            
               <ul className={showLinks ?"list-nav":"list-nav active"} >
              
                <li className="item-nav">
                  <a href="#home" onClick={handleClick}>
                    <Typography variant='button'>HOME</Typography>
                  </a>
                </li>
                <li className="item-nav">
                  <a href="#about" onClick={handleClick}>
                    <Typography variant='button'>ABOUT</Typography>
                  </a>
                </li>
                <li className="item-nav">
                   <a href="#project" onClick={handleClick}>
                     <Typography variant='button'>PROJECT</Typography>
                   </a>
                </li>
                <li className="item-nav">
                   <a href="#contact" onClick={handleClick}>
                    <Typography variant='button'>CONTACT</Typography>
                   </a>
                </li>
               </ul>
             
             
            
               <i className="menu fas fa-bars" onClick={toggleLinks}></i>
            </div>
            
          </nav> 

        
        
    )
}