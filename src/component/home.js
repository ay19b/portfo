import React, {useEffect } from "react";
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Home() {
	useEffect(()=>{
	  Aos.init({duration:2000})
    },[]);
    return (
        <section className="home" id="home" >
           <div className="content" data-aos="fade-right">
               <h5>Hi, my name is</h5>
              <h1 className="disc-content">Ayoub Benmerabet</h1>
              <span className="job-content">front-end developer(React js)</span>
              <div className="list-icons">
                 <i className="fab fa-github" data-aos="fade-up" data-aos-delay="100"></i>
                 <i className="fab fa-linkedin-in" data-aos="fade-up" data-aos-delay="300"></i>
                 <i className="fab fa-facebook-f" data-aos="fade-up" data-aos-delay="500"></i>
                 <i className="fab fa-instagram" data-aos="fade-up" data-aos-delay="800"></i>
              </div>
              <button className="btn-content" data-aos="fade-right" data-aos-delay="650"><a href='#project'>see my work</a></button>
           </div>

        
        
      </section>
    )
}
