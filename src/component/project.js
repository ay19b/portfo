import React from 'react'
import './project.css'
import  Proj from '../images/jumia.jpg'
import  Xbox from '../images/Xbox1.png'

export default function Project() {
    return (
       <section className="project" id="project">
         <div class="head-page">PROJECT</div>
         <div class="list-prg">
              <div class="prg">
                  <img src={Proj} />
                  <div class="tit-project">Jumia Clone</div>
                  <div className="tools">
                    <i class="fab fa-react"></i>
                    <i class="fab fa-css3-alt"></i>
                  </div>
                {/*  <div className="buttons">
                    <button>Preview</button>
                    <button>code</button> 
                  </div>
                 */}
              </div>

              <div class="prg">
                  <img src={Proj} />
                  <div class="tit-project">Jumia Clone</div>
                  <div className="tools">
                    <i class="fab fa-react"></i>
                    <i class="fab fa-css3-alt"></i>
                  </div>
                  {/*  <div className="buttons">
                    <button>Preview</button>
                    <button>code</button> 
                  </div>
                 */}
                 
              </div>

              <div class="prg">
                  <img src={Xbox} />
                  <div class="tit-project">Xbox Clone</div>
                  <div className="tools">
                    <i class="fab fa-react"></i>
                    <i class="fab fa-css3-alt"></i>
                  </div>
                  {/*  <div className="buttons">
                    <button>Preview</button>
                    <button>code</button> 
                  </div>
                 */}
                 
              </div>

              <div class="prg">
                  <img src={Xbox} />
                  <div class="tit-project">Xbox Clone</div>
                  <div className="tools">
                    <i class="fab fa-react"></i>
                    <i class="fab fa-css3-alt"></i>
                  </div>
                  {/*  <div className="buttons">
                    <button>Preview</button>
                    <button>code</button> 
                  </div>
                 */}
                 
              </div>


             



             

         </div>

         <div class="num-pg">
              <div class="num">03</div>
              <div class="under-line"></div>
        </div>
       </section>
    )
}
