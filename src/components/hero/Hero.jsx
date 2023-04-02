import React from "react";
import './Hero.css';
import HeroImg from '../../assets/img/hero_image.png';
import { Link } from "react-router-dom";

const Hero = () => {
return(
<section id="hero" className="d-flex align-items-center">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-up" data-aos-delay="200">
                <h1>The Perfect Solutions For Your Business</h1>
                <h2>Get Your Business Everywhere with ease and flexibility</h2>
                <div className="d-flex justify-content-center justify-content-lg-start">
                    <Link to='campaign' className="btn-get-started scrollto">Get Started</Link>
                </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                <img style={{ borderRadius: 25}} src={HeroImg} className="img-fluid animated"  />
            </div>
        </div>
    </div>
</section>
)
}

export default Hero;