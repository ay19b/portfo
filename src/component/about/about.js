import React, {useEffect } from "react";
import './about.css'
import {DiReact} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {AiFillHtml5,AiFillGithub} from 'react-icons/ai'
import {SiCss3,SiNextdotjs} from 'react-icons/si'
import {FaSass,} from 'react-icons/fa'
import {SiRedux} from 'react-icons/si'
import {FaGit} from 'react-icons/fa'
import {Typography,Tooltip,Grid} from '@material-ui/core'
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
                My experience is in the following areas:
        
             </Typography>
          </div>
          
        </div>
         <Grid container justifyContent="center" spacing={4} className="list-skills">
           <Grid item md={4} xs={6} sm={4} className="item-skill" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
            <Tooltip title="Html" placement="top">
              <Typography variant='h3'><AiFillHtml5 /></Typography>
            </Tooltip> 
           </Grid>
           <Grid item md={4} xs={6} sm={4} className="item-skill" data-aos="fade-up" data-aos-delay="250" data-aos-once="true">
            <Tooltip title="Css" placement="top">
              <Typography variant='h3'><SiCss3 /></Typography>
            </Tooltip> 
           </Grid>
           <Grid item md={4} xs={6} sm={4} className="item-skill" data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
            <Tooltip title="Javascript" placement="top">
              <Typography variant='h3'><IoLogoJavascript /></Typography>
            </Tooltip> 
           </Grid>
           <Grid item md={4} xs={6} sm={4} className="item-skill" data-aos="fade-up" data-aos-delay="550" data-aos-once="true">
            <Tooltip title="Sass" placement="top">
              <Typography variant='h3'><FaSass/></Typography>
            </Tooltip> 
           </Grid>
           <Grid item md={4} xs={6} sm={4} className="item-skill" data-aos="fade-up" data-aos-delay="700" data-aos-once="true">
            <Tooltip title="React" placement="top">
              <Typography variant='h3'><DiReact /></Typography>
            </Tooltip> 
           </Grid>
           <Grid item md={4} xs={6} sm={4} className="item-skill"  data-aos="fade-up" data-aos-delay="850" data-aos-once="true">
            <Tooltip title="Redex"placement="top" >
              <Typography variant='h3'><SiRedux /></Typography>
            </Tooltip> 
           </Grid>
           <Grid item md={4} xs={6} sm={4} className="item-skill" data-aos="fade-up" data-aos-delay="1000" data-aos-once="true">
            <Tooltip title="Github" placement="top">
              <Typography variant='h3'><AiFillGithub /></Typography>
            </Tooltip> 
           </Grid>
           <Grid item md={4} xs={6} sm={4} className="item-skill" data-aos="fade-up" data-aos-delay="1150" data-aos-once="true">
            <Tooltip title="Git" placement="top">
              <Typography variant='h3'><FaGit /></Typography>
            </Tooltip> 
           </Grid>
         </Grid>
      </div>
       
       
       
      </section>
    )
}
