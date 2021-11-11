import React, {useEffect } from "react";
import './project.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Project() {
	useEffect(()=>{
	  Aos.init({duration:2000})
    },[]);
	
	
    return (
       <section className="project" id="project" >
         <div className="head-page">PROJECT</div>
         <div className="list-prg">
              <div className="prg" data-aos="fade-up" data-aos-delay="100">
                <a href="https://ay19b.github.io/jumia" target="_blank">
                   <div className="image"></div>
                 
                  <div className="tit-project">jumia clone</div>
                  <div className="tools">
                    <i className="fab fa-react"></i>
                    <i className="fab fa-css3-alt"></i>
                  </div>
                </a>
              </div>

              

              <div className="prg" data-aos="fade-up" data-aos-delay="250">
                <a href="https://ay19b.github.io/xbox" target="_blank">
                  <div className="image"></div>
                  <div className="tit-project">xbox clone</div>
                  <div className="tools">
                    <i className="fab fa-react"></i>
                    <i className="fab fa-css3-alt"></i>
                  </div>
                </a>  
              </div>

              
			  <div className="prg" data-aos="fade-up" data-aos-delay="400">
                <a href="https://ay19b.github.io/Cryptocurrency" target="_blank">
                  <div className="image"></div>
                  <div className="tit-project">cryptocurrency</div>
                  <div className="tools">
                    <i className="fab fa-react"></i>
                    <i className="fab fa-css3-alt"></i>
                  </div>
                </a>  
              </div>
			  
			  <div className="prg" data-aos="fade-up" data-aos-delay="550">
                <a href="https://ay19b.github.io/FlashCard" target="_blank">
                  <div className="image"></div>
                  <div className="tit-project">flashcard</div>
                  <div className="tools">
                    <i className="fab fa-react"></i>
                    <i className="fab fa-css3-alt"></i>
                  </div>
                </a>  
              </div>
			  
			  <div className="prg" data-aos="fade-up" data-aos-delay="700">
                <a href="https://ay19b.github.io/restaurant" target="_blank">
                  <div className="image"></div>
                  <div className="tit-project">restaurant</div>
                  <div className="tools">
                    <i className="fab fa-react"></i>
                    <i className="fab fa-css3-alt"></i>
                  </div>
                </a>  
              </div>

             
         </div>

         
       </section>
    )
}
