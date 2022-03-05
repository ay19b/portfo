import React, {useEffect } from "react";
import './about.css'
import {Typography,Grid} from '@material-ui/core'
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
         <Grid container justifyContent="center" spacing={3} className="list-skills">
           <Grid item md={4} xs={6} sm={4} className="item-skill" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
              <Typography variant='h5'>
                <li>Html</li>
              </Typography>
           </Grid>
           <Grid item md={4} xs={6} sm={4} className="item-skill" data-aos="fade-up" data-aos-delay="150" data-aos-once="true">
              <Typography variant='h5'>
                <li>Css</li>
              </Typography>
           </Grid>
           <Grid item md={4} xs={6} sm={4} className="item-skill" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
              <Typography variant='h5'>
                <li>Javascript</li>
              </Typography>
           </Grid>
           <Grid item md={4} xs={6} sm={4} className="item-skill" data-aos="fade-up" data-aos-delay="250" data-aos-once="true">
              <Typography variant='h5'>
                 <li>ReactJs</li>
              </Typography>
           </Grid>
           <Grid item md={4} xs={6} sm={4} className="item-skill" data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
              <Typography variant='h5'>
                <li>Material ui</li>
              </Typography>
           </Grid>
           
           <Grid item md={4} xs={6} sm={4} className="item-skill"  data-aos="fade-up" data-aos-delay="350" data-aos-once="true">
              <Typography variant='h5'>
                <li>Redex</li>
              </Typography>
           </Grid>
           <Grid item md={4} xs={6} sm={4} className="item-skill"  data-aos="fade-up" data-aos-delay="350" data-aos-once="true">
              <Typography variant='h5'>
                <li>NextJs</li>
              </Typography>
           </Grid>
           <Grid item md={4} xs={6} sm={4} className="item-skill" data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
              <Typography variant='h5'>
                <li>Github</li>
              </Typography>
           </Grid>
           <Grid item md={4} xs={6} sm={4} className="item-skill" data-aos="fade-up" data-aos-delay="450" data-aos-once="true">
              <Typography variant='h5'>
                <li>Git</li>
              </Typography>
           </Grid>
         </Grid>
      </div>
       
       
       
      </section>
    )
}
