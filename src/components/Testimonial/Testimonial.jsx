import React from 'react'
import img from "../../assets/avatar1.jpg";
import {AiFillStar} from "react-icons/ai";
import "./Testimonial.css"
const Testimonial = () => {
  return (
    <div className="dflex">
    <div>
      <h2 className='header'>Testimonials</h2>
      <p>what people say about us</p>
    </div>
    <div className="cardComp">
      <div className="Card">
        <div className="imgContainer">
          <img className='round' src={img} alt="testimonialImage" />
          <div className="textContainer">
          <p>Sheila peter</p>
          <p className="imgText">kenya</p>
          </div>
        </div>
        <p className="text">
          Amana hub is the best digital agency I've seen so far, they saved me on my video manatage project and it was a huge one i will forever be gratiful to the person that recommended them
        </p>
        <p className='starContainer'>
          <div className="starContainer">
          <AiFillStar color='Gold' size="2rem"/>
          <AiFillStar color='Gold' size="2rem"/>
          <AiFillStar color='Gold' size="2rem"/>
          <AiFillStar color='Gold' size="2rem"/>
          <AiFillStar color='Gold' size="2rem"/>
          </div>
          
        </p>
      </div>
      <div className="Card">
        <div className="imgContainer">
          <img className='round' src={img} alt="testimonialImage" />
          <div className="textContainer">
          <p>Tunde Folawiyo</p>
          <p className="imgText">Nigeria</p>
          </div>
        </div>
        <p className="text">
          these guys really did a good job with my exchange company the markerting strategy is top notch. i really can't wait for us to start working on our upcoming produ 
        </p>
        <div className="starContainer">
          <AiFillStar color='Gold' size="2rem"/>
          <AiFillStar color='Gold' size="2rem"/>
          <AiFillStar color='Gold' size="2rem"/>
          <AiFillStar color='Gold' size="2rem"/>
          <AiFillStar color='Gold' size="2rem"/>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Testimonial;
