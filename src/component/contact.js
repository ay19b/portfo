import React from 'react'
import "./contact.css"
export default function Contact() {
    return (
        <section className="contact" id="contact">
        <div className="content">
            <div className="line"></div>
            <h1 className="name">let's work together</h1>
           
         <div className="inf">
         <div className="email">
             <i className="far fa-envelope"></i>
             <h3>Benmerabetayoub95 @gmail.com</h3>
         </div>
         <div className="email">
             <i className="fas fa-phone-alt"></i>
             <h3>0560656613</h3>
         </div>
         <div className="email">
             <i class="fas fa-map-marker-alt"></i>
             <h3>Setif-Algeria</h3>
         </div>
         </div>

         
        </div>
        <div className="list-icons">
                 <i class="fab fa-github"></i>
                 <i class="fab fa-linkedin-in"></i>
                 <i class="fab fa-facebook-f"></i>
                 <i class="fab fa-instagram"></i>
        </div>
        
        <div class="num-pg">
        <div class="num">04</div>
        <div class="under-line"></div>
       </div>
       
       
    </section>
    )
}
