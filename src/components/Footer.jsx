import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Footer.css"

export default function Footer() {
  return (
   <footer>
    <h3>Lets Keep in touch</h3>
    <p>Find us on any of these platform listed below</p>
    <div className='socials'>
        < FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
        <GitHubIcon/>
    </div>
    <h4>Useful LINKS</h4>
   <p>Contact Us</p>
   <p>About Us</p>
   <h4>OTHER RESOURCES</h4>
   <p>Terms and Conditions</p>
   <p>Privacy and Policy</p>
   </footer>
  )
}
