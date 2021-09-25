import React from 'react'
import "./contact.css"
export default function Contact() {
    return (
        <section className="contact" id="contact">
        <div className="content">
            <div className="line"></div>
            <h1 className="name">Get in touch</h1>
           
         <div className="inf">
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
        <div className="list-icons">
                <a href="https://github.com/ay19b" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/ayoub-ben-3a1793217/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
        </div>
        
        <div className="num-pg">
        <div className="num">04</div>
        <div className="under-line"></div>
       </div>
       
       
    </section>
    )
}
