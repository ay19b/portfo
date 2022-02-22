import React, {useEffect } from "react";
import {Typography,Grid} from '@material-ui/core'
import './project.css'
import {Data} from './Data'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Project() {
	useEffect(()=>{
	  Aos.init({duration:2000})
    },[]);
	
	
    return (
       <section className="project" id="project" >
         <Typography variant='h4' className="head-page">PROJECT</Typography>
         <Grid container className="list-prg" justifyContent="space-around">

              {Data.map((item)=>{
               const {id,img,name,live,iconOne,iconTwo}=item;
               return(
                <Grid item md={5} xs={9} sm={5}  className="prg" key={id} data-aos="fade-up" data-aos-delay="100*key"data-aos-once="true">
                  <a href={live} target="_blank">
                     <div className="image"><img src={img}/></div>
                     <div className='detail-prg'>
                       <Typography variant='h6' className="tit-project">{name}</Typography>
                       <div className="tools">
                        <Typography variant='h5' className="tit-project">{iconOne}</Typography>
                        <Typography variant='h5' className="tit-project">{iconTwo}</Typography>
                       </div>
                    
                   </div> 
                  </a>
                  
                </Grid> 
                   
               )
           })}
             
         </Grid>

         
       </section>
    )
}
