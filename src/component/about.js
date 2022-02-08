import React, {useEffect } from "react";
import './about.css'
import {DiReact} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {AiFillHtml5,AiFillGithub} from 'react-icons/ai'
import {SiMaterialui} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {FaSass} from 'react-icons/fa'
import {SiRedux} from 'react-icons/si'
import {FaGit} from 'react-icons/fa'
import {Typography,Button} from '@material-ui/core'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(()=>{
	  Aos.init({duration:2000})
    },[]);
return (
  <section className="about"id="about" >

    <Typography variant='h4' className="head-page">About Me</Typography>
      
      <div className="content skl">
        <div className="about-cont">
          <div className="inf-content" data-aos="fade-right" data-aos-once="true">
            <Typography>My Name is Ayoub Benmerabet,I am a 26 years old,I'm a Front End Developer,

                Enthusiastic and self motivated I began to be fascinated in web development and gained experience in this area by working on multiple challenging projects. As a developer and as a person I am always keen to gain even more experience and knowledge.

                My strongest technical skills are writing code in React js.

                Building digital products is not just a job for me, it's a passion and a hobby as well.
        
             </Typography>
          </div>
          
        </div>
      <Typography data-aos="fade-right" data-aos-delay="50" data-aos-once="true">My experience is in the following areas:</Typography>
      <ul className="list-skills">

        <li className="item-skill" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
          <Typography variant='h3'><AiFillHtml5 /></Typography>
        </li>
        <li className="item-skill" data-aos="fade-up" data-aos-delay="250" data-aos-once="true">
          <Typography variant='h3'><SiCss3 /></Typography>         
        </li>
        <li className="item-skill" data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
          <Typography variant='h3'><IoLogoJavascript /></Typography> 
        </li> 
        <li className="item-skill" data-aos="fade-up" data-aos-delay="550" data-aos-once="true">
          <Typography variant='h3'><FaSass/></Typography>         
        </li>
        
        
        <li className="item-skill" data-aos="fade-up" data-aos-delay="700" data-aos-once="true">
          <Typography variant='h3'><DiReact /></Typography>
        </li>
        <li className="item-skill" data-aos="fade-up" data-aos-delay="850" data-aos-once="true">
          <Typography variant='h3'><SiRedux /></Typography>        
        </li>

        <li className="item-skill" data-aos="fade-up" data-aos-delay="1000" data-aos-once="true">
          <Typography variant='h3'><AiFillGithub /></Typography>         
        </li>
        <li className="item-skill" data-aos="fade-up" data-aos-delay="1150" data-aos-once="true">
          <Typography variant='h3'><FaGit /></Typography>
        </li>
        
      </ul>
      </div>
       
       
       
      </section>
    )
}
