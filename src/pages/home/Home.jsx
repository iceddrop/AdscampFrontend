import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import Pricing from "../../components/priceComp/PriceComp";
import Services from "../../components/services/Services";
import Dashboard from "../../components/dashboard/DashboardCard";


const Home = () =>{
    return(
      <>
        <Header/>
        <Hero/>
        <Services/>
        <Dashboard/>
        <Pricing/>
        <Footer/>
      </>
    )
}
export default Home;