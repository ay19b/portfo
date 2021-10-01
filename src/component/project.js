import React from 'react'
import './project.css'

export default function Project() {
    return (
       <section className="project" id="project">
         <div className="head-page">PROJECT</div>
         <div className="list-prg">
              <div className="prg">
                <a href="https://ay19b.github.io/jumia" target="_blank">
                   <div className="image"></div>
                 
                  <div className="tit-project">jumia clone</div>
                  <div className="tools">
                    <i className="fab fa-react"></i>
                    <i className="fab fa-css3-alt"></i>
                  </div>
                </a>
              </div>

              

              <div className="prg">
                <a href="https://ay19b.github.io/xbox" target="_blank">
                  <div className="image"></div>
                  <div className="tit-project">xbox clone</div>
                  <div className="tools">
                    <i className="fab fa-react"></i>
                    <i className="fab fa-css3-alt"></i>
                  </div>
                </a>  
              </div>

              <div className="prg">
                <a href="https://ay19b.github.io/Cryptocurrency" target="_blank">
                  <div className="image"></div>
                  <div className="tit-project">cryptocurrency</div>
                  <div className="tools">
                    <i className="fab fa-react"></i>
                    <i className="fab fa-css3-alt"></i>
                  </div>
                </a>  
              </div>

             
         </div>

         <div className="num-pg">
              <div className="num">03</div>
              <div className="under-line"></div>
        </div>
       </section>
    )
}
