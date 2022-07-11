import {FaGithubSquare, FaFacebookSquare, FaLinkedin, FaTelegramPlane} from 'react-icons/fa';


export default function Footer() {
    return (
      <footer className="page-footer" xyz="fade down ease-in-out delay-10">

        <div className="footer-logo xyz-nested" xyz="fade left ease-in-out delay-10" >
           
       </div>
        <div className="footer-right" xyz="fade up stagger ease-in-out delay-10">
            <a className="footer-item xyz-nested " 
                href="https://github.com/LettaVio?tab=repositories" target={'_blank'}>
                <FaGithubSquare/>
            </a> 
            <a className="footer-item xyz-nested" 
                href="https://www.linkedin.com/in/violetta-gryshchuk/" target={'_blank'}>
                <FaLinkedin/>
            </a>
            <a className="footer-item xyz-nested" 
                href='https://t.me/msvio' target={'_blank'}>
                <FaTelegramPlane />
            </a>
            <a className="footer-item xyz-nested" 
                href='https://www.facebook.com/LoreleiVioletta' target={'_blank'}>
                <FaFacebookSquare />
            </a>
        </div>
      </footer>
    );
  }