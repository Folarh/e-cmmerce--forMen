import { useState } from "react";
import { useEffect } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AOS from 'aos'
import 'aos/dist/aos.css'

//* style
import "./Contact.css";

const Contact = () => {
  const [value, setValue] = useState("");

    useEffect(()=>{
      AOS.init({duration: 2000})
    },[])

  return (
    <div className="contact-container" data-aos="flip-right">

      <div className="contact-info">
        <div className="contact-phone">
          <span className="icon-phone">
           <LocalPhoneIcon id="icon"/>
          </span>
          <h4>Phone</h4>
          <p>+12345678</p>
        </div>

        <div className="contact-address">
          <span className="icon-address">
           <HomeIcon id="icon"/>
          </span>
          <h4>Address</h4>
          <p>Alimosho Lagos</p>
        </div>

       

        <div className="contact-email">
          <span className="icon-email">
          <EmailIcon id="icon"/>
          </span>
          <h4>Email</h4>
          <p>folarintaiye@gmail.com</p>
        </div>
      </div>

      <div className="contact-form">
        <h1>Leave Message</h1>

        <form>
          <input
            className="form-input"
            type="text"
            placeholder="Your name"
            autoComplete="off"
            required
          />
          <input
            className="form-input"
            type="email"
            placeholder="Your email"
            autoComplete="off"
            required
          />
          <textarea
            className="form-input"
            cols="10"
            rows="10"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            required
          />

          <button className="form-btn">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
