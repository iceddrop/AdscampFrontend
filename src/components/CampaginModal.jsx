import React from "react";
import axios from "axios";

const CampaignModal = ()=>{
    const [post, setPost] = React.useState(null);
    const createPost =(e) => {
        e.preventDefault();
        axios
          .post('http://localhost:8000/api/v1/campaign', {
            name:document.getElementById('name').value,
            from_date:document.getElementById('from_date').value,
            to_date:document.getElementById('to_date').value,
            'total_budget':document.getElementById('total_budget').value,
            'daily_budget':document.getElementById('daily_budget').value,
            image:document.getElementById('image').value
          })
          .then((response) => {
            setPost(response.data);
          });
          console.log(post.data);
          if (!post) return "No Post Data!"
      }
    return(
        <div className="modal fade" id="CModal" tabindex="-1" aria-labelledby="CModalLabel" aria-hidden="true">
        <div className="modal-dialog">
             <form>
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
                        <input id="image" name="image" className="form-control" type="file" multiple/>
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