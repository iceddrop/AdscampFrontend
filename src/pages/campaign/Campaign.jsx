import React from "react";
import Header from "../../components/header/Header";
import './Campaign.css';
import Sidebar from "../../components/Sidebar";
import CampaignCard from "../../components/cards/CampaignCard";
import CampaignModal from "../../components/CampaginModal";
import SingleCampaign from "../../components/singlecampaign/SingleCampaign";

const Campaign = () =>{
    return(
         <>
          <Header/>
          <div className="d-flex">
          <Sidebar/>
          <CampaignCard/>
          <CampaignModal/>
          <SingleCampaign/>
          </div>
         </>
    )
}
export default Campaign;