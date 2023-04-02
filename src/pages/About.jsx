import "./About.css"
import Polo5 from "../assets/polo5.jpg"

export default function About() {
  return (
   <div className="about">
    <h1>ABOUT This page</h1>
    <h2>ALLWears is where you can get quality and affordable male and female wears</h2>
    <div className="about-info">
       <img src={Polo5} alt="pic"/>
    </div>
   </div>
    
   
  )
}
