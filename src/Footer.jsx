import * as React from 'react';
import {FaGithubSquare, FaFacebookSquare, FaLinkedin, FaTelegramPlane} from 'react-icons/fa';
import  Button  from "react-bootstrap/Button";


export default function Footer() {
    return (
      <footer className="page-footer" xyz="fade down ease-in-out delay-10">

        <div className="footer-logo xyz-nested" xyz="fade left ease-in-out delay-10" >
           Contact with me:
       </div>
        <div className="footer-right" xyz="fade up stagger ease-in-out delay-10">
        <a className=" f-soc xyz-nested mx-2 btn btn-outline-dark" 
                href="https://github.com/LettaVio?tab=repositories" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare/>
            </a> 
            <a className="f-soc xyz-nested mx-2 btn btn-outline-dark" 
                href="https://www.linkedin.com/in/violetta-gryshchuk/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin/>
            </a>
           
            <a className="f-soc xyz-nested mx-2 btn btn-outline-dark" 
                href='https://t.me/msvio' target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane />
            </a>
            
            <a className=" f-soc xyz-nested mx-2 btn btn-outline-dark" 
                href='https://www.facebook.com/LoreleiVioletta' target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare />
              
            </a>  
        </div>
      </footer>
    );
  }