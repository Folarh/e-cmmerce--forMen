import "./About.css"
import { useEffect } from 'react';
import Polo5 from "../assets/polo5.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
   <div className="about"  data-aos="flip-left">
    <div className="about-info">
       <img src={Polo5} alt="pic"/>
       <h4>OUR NICHE</h4>
       <p className="first-para" data-aos="zoom-out">
        Welcome to  Accessorries, where you fashion meets quality and affordability.
        our brand  was founded 2023 with the aim of providing  our customers with latest
          fashion trends at affordable prices.
          </p>

          <p className="second-para" data-aos="zoom-out">
            We believe that fashion should be fun inclusive. our team is dedicated to creating a positive
            shopping experience for our customers.
          </p>
          <div className="mission" data-aos="zoom-out">
            <p><b>Our Mission</b> is to make a difference through our branding
            by staying ahead of the fashion trends, defining style, and giving customerswhat they want</p>
          </div>

          <div className="vision" data-aos="zoom-in">
            <p><b>Our Vision</b> is to change the way our society connects with the fashion industry
            by provoding our customers with products that are ethically and responsibly sourced.
           </p>
          </div>
    </div>
    
   </div>
    
   
  )
}
