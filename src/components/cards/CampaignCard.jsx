import React,{useState, useEffect} from 'react';
import './CampaignCard.css';
import axios from 'axios';
import IMG1 from '../../assets/img/assets/portfolio1.PNG';
const baseURL = "https://adscamp.thevootblog.com/api/v1/campaign";

const CampaignCard = () => {
    const [campaign, setCampaign] = useState(null);
        useEffect(() => {
        axios.get(baseURL).then((response) => {
          setCampaign(response.data);
        });
      }, []);
      if (!campaign) return null;
  return (
    <>
    <div className='container campaign_card__container mt-5'>
      {
        campaign.data.map((item, index)=>{
            return(
                <article key={index} className='campaign_card__item mt-4'>
                <div className='campaign_card__item-image'>
                  <img style={{width:'100%', height:'250px'}} src={IMG1} alt="Discussion Forum"/>
                </div>
                <h5 className="mt-2">{item.name}</h5>
                <h6>Total Budget${item.total_budget}</h6>
                <h6>Total Budget${item.daily_budget}</h6>
                <div className='campaign_card_item-date'>
                    <ul className='d-flex justify-content-between p-0'>
                        <a href="#"><p>From: </p> {item.from_date}</a>
                        <a href="#"><p>To: </p>   {item.to_date}</a>
                    </ul>
                </div>
                <div className='campaign_card__item-cta d-flex justify-content-center mt-4'>
        
                <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#SModal" className='btn btn-primary rounded-pill' target='_blank'>Show Details</a>
                </div>
              </article>
            )
  
        })
      }

    </div>
    </>
  );
}

export default CampaignCard;
