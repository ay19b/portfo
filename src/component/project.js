import React, {useEffect } from "react";
import {Typography} from '@material-ui/core'
import {GrReactjs} from 'react-icons/gr'
import {DiCss3} from 'react-icons/di'
import './project.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Project() {
	useEffect(()=>{
	  Aos.init({duration:2000})
    },[]);
	
	
    return (
       <section className="project" id="project" >
         <Typography variant='h4' className="head-page">PROJECT</Typography>
         <div className="list-prg">
              <div className="prg" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                <a href="https://ay19b.github.io/jumia" target="_blank">
                
                <div className="image"></div>
                 <div className='detail-prg'>
                  <Typography variant='h6' className="tit-project">jumia clone</Typography>
                  <div className="tools">
                   <Typography variant='h6' className="tit-project"><GrReactjs /></Typography>
                   <Typography variant='h6' className="tit-project"><DiCss3 /></Typography>
                  </div>
                  </div> 
                </a>
              </div>

              

              <div className="prg" data-aos="fade-up" data-aos-delay="250"data-aos-once="true" >
                <a href="https://ay19b.github.io/xbox" target="_blank">
                  <div className="image"></div>
                  <div className='detail-prg'>
                  <Typography variant='h6' className="tit-project">Xbox clone</Typography>
                  <div className="tools">
                   <Typography variant='h6' className="tit-project"><GrReactjs /></Typography>
                   <Typography variant='h6' className="tit-project"><DiCss3 /></Typography>
                  </div>
                  </div> 
                </a>  
              </div>

              
			  <div className="prg" data-aos="fade-up" data-aos-delay="400"data-aos-once="true" >
                <a href="https://ay19b.github.io/Cryptocurrency" target="_blank">
                  <div className="image"></div>
                  <div className='detail-prg'>
                  <Typography variant='h6' className="tit-project">cryptocurrency</Typography>
                  <div className="tools">
                   <Typography variant='h6' className="tit-project"><GrReactjs /></Typography>
                   <Typography variant='h6' className="tit-project"><DiCss3 /></Typography>
                  </div>
                  </div> 
                </a>  
              </div>
			  
			  <div className="prg" data-aos="fade-up" data-aos-delay="550" data-aos-once="true">
                <a href="https://ay19b.github.io/FlashCard" target="_blank">
                  <div className="image"></div>
                  <div className='detail-prg'>
                  <Typography variant='h6' className="tit-project">flashcard</Typography>
                  <div className="tools">
                   <Typography variant='h6' className="tit-project"><GrReactjs /></Typography>
                   <Typography variant='h6' className="tit-project"><DiCss3 /></Typography>
                  </div>
                  </div> 
                </a>  
              </div>
			  
			  <div className="prg" data-aos="fade-up" data-aos-delay="700"data-aos-once="true" >
                <a href="https://ay19b.github.io/restaurant" target="_blank">
                  <div className="image"></div>
                  <div className='detail-prg'>
                  <Typography variant='h6' className="tit-project">restaurant</Typography>
                  <div className="tools">
                   <Typography variant='h6' className="tit-project"><GrReactjs /></Typography>
                   <Typography variant='h6' className="tit-project"><DiCss3 /></Typography>
                  </div>
                  </div> 
                </a>  
              </div>

             
         </div>

         
       </section>
    )
}
