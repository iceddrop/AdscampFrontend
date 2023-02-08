import React from "react";
import Header from "../../components/header/Header";
import './Campaign.css';
import Sidebar from "../../components/Sidebar";
import CampaignCard from "../../components/cards/CampaignCard";
import CampaignModal from "../../components/CampaginModal";

const Campaign = () =>{
    return(
         <>
          <Header/>
          <div className="d-flex">
          <Sidebar/>
          <CampaignCard/>
          <CampaignModal/>
          </div>
         </>
    )
}
export default Campaign;