import React from 'react'
import {Link } from "react-router-dom";
import './home.css'

export default function Home() {
    return (
        <section className="home" id="home">
           <div className="content">
               <h5>Hi, my name is</h5>
              <h1 className="disc-content">Ayoub Benmerabet</h1>
              <span className="job-content">front-end developer(React js)</span>
              <div className="list-icons">
                 <i class="fab fa-github"></i>
                 <i class="fab fa-linkedin-in"></i>
                 <i class="fab fa-facebook-f"></i>
                 <i class="fab fa-instagram"></i>
              </div>
              <button className="btn-content"><a href='#project'>see my work</a></button>
           </div>

        <div className="num-pg">
            <div className="num">01</div>
            <div className="under-line"></div>
        </div>
        
      </section>
    )
}
