import React from "react";
import axios from "axios";

const CampaignModal = () => {
  const [post, setPost] = React.useState(null);
  const createPost = async (e) => {
      e.preventDefault();
      let form = document.getElementById('form');
      let formData = new FormData(form);
      try {
          const res = await axios.post('https://adscamp.thevootblog.com/api/v1/campaign', formData, {
              headers: {
              }
          });
          console.log(res.data);
      } catch (e) {
          console.log(e.error);
      }
  };
    return(
        <div className="modal fade" id="CModal" tabindex="-1" aria-labelledby="CModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
             <form id="form" encType="multipart/form-data">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="CModalLabel">Add Campaign</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                 <div className="form-group">
                        <label htmlFor="Name"><span className="text-muted"><small>Campaign Name </small><span className="text-danger">*</span></span></label>
                        <input id="name" name="name" className="form-control" type="text"/>
                 </div>
                 <div className="form-group d-flex justify-content-between my-2">
                    <div className="from_date">
                        <label htmlFor="from_date"><span className="text-muted"><small>From Date </small><span className="text-danger">*</span></span></label>
                        <input id="from_date" name="from_date" className="form-control" type="date"/>
                    </div>
                    <div className="to_date">
                        <label htmlFor="to_date"><span className="text-muted"><small>To Date </small><span className="text-danger">*</span></span></label>
                        <input id="to_date" name="to_date" className="form-control" type="date"/>
                    </div>
                 </div>
                 <div className="form-group my-2">
                        <label htmlFor="Image"><span className="text-muted"><small>Campaign Images  </small><span className="text-danger">*</span></span></label>
                        <input id="image" name="image" accept="image/*" className="form-control" type="file" multiple/>
                 </div>
                 <div className="form-group d-flex justify-content-between my-2">
                    <div className="daily_budget">
                        <label htmlFor="daily_budget"><span className="text-muted"><small>Daily Budget </small><span className="text-danger">*</span></span></label>
                        <input id="daily_budget" name="daily_budget" className="form-control" type="text"/>
                    </div>
                    <div className="total_budget">
                        <label htmlFor="total_budget"><span className="text-muted"><small>Total Budget </small><span className="text-danger">*</span></span></label>
                        <input id="total_budget" name="total_budget" className="form-control" type="text"/>
                    </div>
                 </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
              <button type="submit" onClick={createPost} className="btn btn-success btn-sm">Save</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    )
}

export default CampaignModal;


