import React from "react";
import FancyB from "../fancyBox/FancyBox";


const SingleCampaign = ()=>{
    return(
        <div className="modal fade" id="SModal" tabindex="-1" aria-labelledby="SModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="SModalLabel">Add Campaign</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h3 className="text-center"><FancyB/></h3>
            </div>
            <div className="modal-footer">
                <div className="text-center">
               <h2>Content Comes Herer</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid dolorum amet ut dolor nam, enim libero dolorem.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SingleCampaign;