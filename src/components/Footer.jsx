// import React from 'react'

// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import "./Footer.css"

// export default function Footer() {
//   return (
//    <footer>
//     <h3>Lets Keep in touch</h3>
//     <p>Find us on any of these platform listed below</p>
//     <div className='socials'>
//         < FacebookIcon/>
//         <InstagramIcon/>
//         <TwitterIcon/>
//         <GitHubIcon/>
//     </div>
//     <h4>Useful LINKS</h4>
//    <p>Contact Us</p>
//    <p>About Us</p>
//    <h4>OTHER RESOURCES</h4>
//    <p>Terms and Conditions</p>
//    <p>Privacy and Policy</p>
//    </footer>
//   )
// }

import { Link } from "react-router-dom";

//*style
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer-one">
          <Link to="/">
          <h1 className="footer-one-logo">ALLCCESSORIES</h1>
            </Link>

          <p>Address:  alimosho Lagos</p>
          <p>Phone: +12345</p>
          <p>Email: hireme@gmail.com</p>
        </div>

        <div className="footer-two">
          <h5>Useful Links</h5>

          <ul className="footer-two-link">
            <Link to="#">
              <li>About Us</li>
            </Link>
            <Link to="#">
              <li>About Our Shop</li>
            </Link>
            <Link to="#">
              <li>Secure Shopping</li>
            </Link>
            <Link to="#">
              <li>Delivery infomation</li>
            </Link>
            <Link to="#">
              <li>Privacy Policy</li>
            </Link>
          </ul>
        </div>

        <div className="footer-three">
          <h5>Join Our Newsletter Now</h5>

          <p>Get E-mail updates about our latest shop and special offers.</p>

          <div className="footer-three-input">
            <input
              type="text"
              placeholder="Enter your mail"
              autoComplete="off"
            />
            <button>SUBSCRIBE</button>
          </div>

          <div className="footer-three-media">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter"></i>
          </div>
        </div>
      </div>

      <p className="footer-end">
        Copyright ©2023  | Made with love by Taiwo
      </p>
    </footer>
  );
};

export default Footer;
