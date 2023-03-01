import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Pricing from "../../components/priceComp/Pricing";


const Home = () =>{
    return(
      <>
        <Header/>
        <Hero/>
        <Pricing/>
        <Footer/>
      </>
    )
}
export default Home;