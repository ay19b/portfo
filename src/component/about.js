import React from 'react'
import './about.css'
import {DiReact} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {AiFillHtml5,AiFillGithub} from 'react-icons/ai'
import {SiCss3} from 'react-icons/si'
import {FaSass} from 'react-icons/fa'
import {SiRedux} from 'react-icons/si'
import {FaGit} from 'react-icons/fa'

export default function About() {
    return (
  <section className="about"id="about" >

    <div className="head-page">About Me</div>
      
      <div className="content skl">
        <div className="about-cont">
          <div className="inf-content">
            <h2>Who am i</h2>
            <p>My Name is Ayoub Benmerabet,I am a 26 years old,I'm a Front End Developer,

                Enthusiastic and self motivated I began to be fascinated in web development and gained experience in this area by working on multiple challenging projects. As a developer and as a person I am always keen to gain even more experience and knowledge.

                My strongest technical skills are writing code in React js.

                Building digital products is not just a job for me, it's a passion and a hobby as well.
                <br/>
                <br/><strong>Edication</strong>: self learning,
             </p>
          </div>
          
        </div>
        <h3>My experience is in the following areas:</h3>
      <ul className="list-skills">

        <li className="item-skill">
          <AiFillHtml5 />
        </li>
        <li className="item-skill">
          <SiCss3 />
        </li>
        <li className="item-skill">
          <IoLogoJavascript />
        </li> 
        <li className="item-skill">
          <FaSass />
        </li>
        
        
        <li className="item-skill">
          <DiReact />
        </li>
        <li className="item-skill">
          <SiRedux />
        </li>

        <li className="item-skill">
          <AiFillGithub />
        </li>
        <li className="item-skill">
          <FaGit />
        </li>
        
      </ul>
      </div>
       
       
       <div className="num-pg">
        <div className="num">02</div>
        <div className="under-line"></div>
       </div>
      </section>
    )
}
