import React from 'react'
import './TopHeader.css'
import {IconButton} from '@mui/material'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faGithub} from "@fortawesome/free-brands-svg-icons"
import { fontSize } from '@mui/system'


function TopHeader() {
  return (
    <div className='topHeaderContainer'>

        <div className='topHeaderLink'>
            <a href='#' ><h3>Place your Text Here.</h3></a>
        </div>

        <div className='toHeaderIcons'>

            <IconButton 
                sx={{ fontSize : '12px',color: 'white ',
                "&:hover": {
                    color: "rgb(0,17,255)",
                }}}
            >
                <FontAwesomeIcon icon={faFacebook} />
            </IconButton>

            <IconButton 
                sx={{ fontSize : '12px', color: 'white ',
                "&:hover": {
                    color: "rgb(0,17,255)",
                }}}
            >
                <FontAwesomeIcon icon={faInstagram} />
            </IconButton>

            <IconButton 
                sx={{ fontSize : '12px', color: 'white',
                "&:hover": {
                    color: "rgb(0,17,255)",
                }}}
            >
                <FontAwesomeIcon icon={faGithub} />
            </IconButton>    
        </div>

    </div>
  )
}

export default TopHeader