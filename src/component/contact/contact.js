import React, {useEffect } from "react";
import "./contact.css"
import {Typography} from '@material-ui/core'
import {GrFacebookOption,GrGithub,GrInstagram} from 'react-icons/gr'
import {FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {ImPhone} from 'react-icons/im'
import {MdLocationOn} from 'react-icons/md'
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
            <Typography variant='h4'>Get in touch</Typography>
           
         <div className="inf" data-aos="fade-left" data-aos-once="true">
         <div className="detail-inf">
             <Typography variant='h5' className="icon"><HiOutlineMail /></Typography>
             <Typography variant='h6'>Benmerabetayoub95@ gmail.com</Typography>
         </div>
         <div className="detail-inf">
             <Typography variant='h5' className="icon"><ImPhone /></Typography>
             <Typography variant='h6'>+213560656613</Typography>
         </div>
         <div className="detail-inf">
             <Typography variant='h5' className="icon"><MdLocationOn /></Typography>
             <Typography variant='h6'>Setif-Algeria</Typography>
         </div>
         </div>

         
        </div>
        <div className="list-icons">
            <Typography variant='h5' className="icon" gutterBottom ><GrGithub /></Typography>
            <Typography variant='h5' className="icon" gutterBottom ><GrFacebookOption /></Typography>
            <Typography variant='h5' className="icon" gutterBottom ><GrInstagram /></Typography>
            <Typography variant='h5' className="icon" gutterBottom ><FaLinkedin /></Typography>
        </div>
        
        
       
       
    </section>
    )
}
