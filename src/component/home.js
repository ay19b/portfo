import React from 'react'
import './home.css'

export default function Home() {
    return (
        <section className="home" id="home">
           <div className="content">
               <h5>Hi, my name is</h5>
              <h1 className="disc-content">Ayoub Benmerabet</h1>
              <span className="job-content">front-end developer(React js)</span>
              <div className="list-icons">
                 <a href="https://github.com/ay19b" target="_blank"><i className="fab fa-github"></i></a>
                 <a href="https://www.linkedin.com/in/ayoub-ben-3a1793217/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                 <i className="fab fa-facebook-f"></i>
                 <i className="fab fa-instagram"></i>
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
