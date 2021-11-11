import React, {useEffect } from "react";
import './about.css'
import {DiReact} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {AiFillHtml5,AiFillGithub} from 'react-icons/ai'
import {SiCss3} from 'react-icons/si'
import {FaSass} from 'react-icons/fa'
import {SiRedux} from 'react-icons/si'
import {FaGit} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(()=>{
	  Aos.init({duration:2000})
    },[]);
return (
  <section className="about"id="about" >

    <div className="head-page">About Me</div>
      
      <div className="content skl">
        <div className="about-cont">
          <div className="inf-content" data-aos="fade-right">
            <p>My Name is Ayoub Benmerabet,I am a 26 years old,I'm a Front End Developer,

                Enthusiastic and self motivated I began to be fascinated in web development and gained experience in this area by working on multiple challenging projects. As a developer and as a person I am always keen to gain even more experience and knowledge.

                My strongest technical skills are writing code in React js.

                Building digital products is not just a job for me, it's a passion and a hobby as well.
              
                
             </p>
          </div>
          
        </div>
      <h3 data-aos="fade-right" data-aos-delay="50">My experience is in the following areas:</h3>
      <ul className="list-skills">

        <li className="item-skill" data-aos="fade-up" data-aos-delay="100">
          <AiFillHtml5 />
        </li>
        <li className="item-skill" data-aos="fade-up" data-aos-delay="250">
          <SiCss3 />
        </li>
        <li className="item-skill" data-aos="fade-up" data-aos-delay="400">
          <IoLogoJavascript />
        </li> 
        <li className="item-skill" data-aos="fade-up" data-aos-delay="550">
          <FaSass />
        </li>
        
        
        <li className="item-skill" data-aos="fade-up" data-aos-delay="700">
          <DiReact />
        </li>
        <li className="item-skill" data-aos="fade-up" data-aos-delay="850">
          <SiRedux />
        </li>

        <li className="item-skill" data-aos="fade-up" data-aos-delay="1000">
          <AiFillGithub />
        </li>
        <li className="item-skill" data-aos="fade-up" data-aos-delay="1150">
          <FaGit />
        </li>
        
      </ul>
      </div>
       
       
       
      </section>
    )
}
