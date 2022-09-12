import React from 'react'
import './SecondaryMenu.css'
import {IconButton} from '@mui/material'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faGithub} from "@fortawesome/free-brands-svg-icons"

function SecondaryMenu() {
  return (
    <div className='secondaryMenuContainer'>

      <div className='logo'>
        <image />
      </div>
      <div className='searchBar'>
        <label>
          <input type='search' placeholder='Search...' className='searchBar'/>
        </label>
      </div>
      <div className='secondaryMenuIcons'>
        <IconButton 
                sx={{fontSize : '12px', color: 'black ',
                "&:hover": {
                    color: "rgb(0,17,255)",
                }}}
            >
                <FontAwesomeIcon icon={faFacebook} />
            </IconButton>
          <IconButton 
                sx={{fontSize : '12px', color: 'black ',
                "&:hover": {
                    color: "rgb(0,17,255)",
                }}}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </IconButton>
          <IconButton 
                sx={{fontSize : '12px', color: 'black ',
                "&:hover": {
                    color: "rgb(0,17,255)",
                }}}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </IconButton>
      </div>

    </div>
  )
}

export default SecondaryMenu