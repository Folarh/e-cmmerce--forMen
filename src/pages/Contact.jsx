import { useEffect } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AOS from 'aos'
import 'aos/dist/aos.css'
//* style
import "./Contact.css";

const Contact = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])

  return (
    <div className="contact-container" data-aos="flip-right">
     

      <div className="contact-info">
        <div className="contact-phone" data-aos="zoom-in">
          <span className="icon-phone">
        < LocalPhoneIcon id='icon'/>
          </span>
          <h4>Phone</h4>
          <p>+123476789</p>
        </div>

        <div className="contact-address" data-aos="zoom-out">
          <span className="icon-address">
           <HomeIcon id='icon'/>
          </span>
          <h4>Address</h4>
          <p>***** Lagos</p>
        </div>

        

        <div className="contact-email" data-aos="zoom-in">
          <span className="icon-email">
           <EmailIcon  id='icon'/>
          </span>
          <h4>Email</h4>
          <p>*****@gmail.com</p>
        </div>
      </div>

    </div>
  );
};

export default Contact;
