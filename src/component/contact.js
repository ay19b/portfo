import React, {useEffect } from "react";
import "./contact.css"
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Contact() {
	useEffect(()=>{
	  Aos.init({duration:2000})
    },[]);
    return (
        <section className="contact" id="contact">
        <div className="content">
            <div className="line"></div>
            <h1 className="name">Get in touch</h1>
           
         <div className="inf" data-aos="fade-left">
         <div className="email">
             <i className="far fa-envelope"></i>
             <h3>Benmerabetayoub95@gmail.com</h3>
         </div>
         <div className="email">
             <i className="fas fa-phone-alt"></i>
             <h3>+213560656613</h3>
         </div>
         <div className="email">
             <i className="fas fa-map-marker-alt"></i>
             <h3>Setif-Algeria</h3>
         </div>
         </div>

         
        </div>
        <div className="list-icons" >
                <i className="fab fa-github"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
        </div>
        
        
       
       
    </section>
    )
}
