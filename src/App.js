import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlay} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo1 from '../src/images/logo1.jpg';
import './App.css';
function App() {
  return (
    <div className="App">
    <div className="overlay">
        <div className="container">
            <div className="discount">
           
              
            </div>
            <div className="network">
                <div className="logo" >
               
                </div>
            <div className="overlay_white"></div>

                <div className="appointment">
                    <p>Get 20% Discount On Frist Appointment</p>
                    <button> Book Appointment</button>
                </div>
                <div className="topTagLine">
                    <p><i className="fas fa-play"><FontAwesomeIcon icon={faPlay}size={'lg'}/></i> We sell Make-UP and beauty Products ..</p>
                </div>
                <div className="tagLine1">
                    <p><i className="fas fa-play"><FontAwesomeIcon icon={faPlay}size={'lg'}/></i>BRIDAL MAKE-UP.</p>
                    <p><i className="fas fa-play"><FontAwesomeIcon icon={faPlay}size={'lg'}/></i>OWAMBE MAKE-UP</p>
                </div>
                <div className="tagLine2">
                    <p><i className="fas fa-play"><FontAwesomeIcon icon={faPlay}size={'lg'}/></i>GELE TYING</p>
                    <p><i className="fas fa-play"><FontAwesomeIcon icon={faPlay}size={'lg'}/></i>MAKE-UP TRAINING</p>
                </div>
                <div className="bottomTagLine">
                    <p><i className="fas fa-play"><FontAwesomeIcon icon={faPlay}size={'lg'}/></i>We Make And Sell CUSTOMIZED EYELASHES</p>
                </div>
                <div className="socialButtons">
                    <div className="hover">
                        <span>Contact Us</span>
                        <a className="social-link" href="https://twitter.com/omobomi oluwatosin/"
                            target="_blank"><i className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}size={'lg'}/></i></a>
                        <a className="social-link"
                            href="https://facebook.com/omobomi oluwatosin/" target="_blank"><i className="fab fa-facebook"><FontAwesomeIcon icon={faFacebook}  size={'lg'}/></i></a>
                        <a className="social-link" href="https://www.instagram.com/somebody_i_love1/" target="_blank"><i className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram}  size={'lg'}/></i></a>
                    <a className="social-link"  href="https:///www.linkedin.com/omobomi oluwatosin/" target="_blank"><i className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin}  size={'lg'}/></i></a></div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
