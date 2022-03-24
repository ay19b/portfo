import React, {useEffect } from "react";
import './home.css'
import {Typography,Button} from '@material-ui/core'
import {GrFacebookOption,GrGithub,GrInstagram} from 'react-icons/gr'
import {FaLinkedin} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Home() {
	useEffect(()=>{
	  Aos.init({duration:2000})
    },[]);
    return (
        <section className="home" id="home" >
          
           <div className="content" data-aos="fade-right">
           
              <Typography variant="caption" gutterBottom>Hi, my name is</Typography>
              <Typography variant='h3' gutterBottom>Ayoub Benmerabet</Typography>
              <Typography variant='h5' gutterBottom>front-end developer (React js)</Typography>
              <div className="list-icons">
                 <Typography variant='h6' className="icon" gutterBottom data-aos="fade-up" data-aos-delay="100" data-aos-once="true"><GrGithub /></Typography>
                 <Typography variant='h6' className="icon" gutterBottom data-aos="fade-up" data-aos-delay="100" data-aos-once="true"><GrFacebookOption /></Typography>
                 <Typography variant='h6' className="icon" gutterBottom data-aos="fade-up" data-aos-delay="100" data-aos-once="true"><GrInstagram /></Typography>
                 <Typography variant='h6' className="icon" gutterBottom data-aos="fade-up" data-aos-delay="100" data-aos-once="true"><FaLinkedin /></Typography>
              </div>
              <Button variant="contained" className="btn-content" data-aos="fade-right" data-aos-delay="650"data-aos-once="true" ><a href='#project'>see my work</a></Button>
                   
         </div>

        
          
      </section>
    )
}
