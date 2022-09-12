import React from 'react'
import './Footer.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className="footerContainer">
        <div className="footerLeft">
            <h1>FoodyFy</h1>
            
            <div className='footerLeftContain'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <p>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    : Pulchowk, Lalitpur
                </p>
                <p>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    : +977-9812-995684
                </p>
                <p>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    : info@somemail.com
                </p>
            </div>
        </div>
        <div className="footerMiddle">
            <div className="footerMiddleLeft">
                <h3>Quick Links</h3>
                <ul>
                    <li>Links Required</li>
                    <li>Links Required</li>
                    <li>Links Required</li>
                    <li>Links Required</li>
                    <li>Links Required</li>
                </ul>
            </div>
            <div className="footerMiddleRight">
                <h3>Our Services</h3>
                <ul>
                    <li>Links Required</li>
                    <li>Links Required</li>
                    <li>Links Required</li>
                    <li>Links Required</li>
                    <li>Links Required</li>
                </ul>
            </div>
        </div>
        <div className="footerRight">
            <h3>Our New Products</h3>
            <div className='footerRightRight'>
                <div>
                    <img alt='footerimage' src={Image}/>
                </div>
                <div>
                    <img alt='footerimage' src={Image}/>
                </div>
                <div>
                    <img alt='footerimage' src={Image}/>
                </div>
            </div>
            <div className='footerRightLeft'>
                <div>
                    <img alt='footerimage' src={Image}/>
                </div>
                <div>
                    <img alt='footerimage' src={Image}/>
                </div>
                <div>
                    <img alt='footerimage' src={Image}/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer