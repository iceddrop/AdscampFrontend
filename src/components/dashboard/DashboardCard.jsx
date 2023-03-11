import {GiArrowCursor} from "react-icons/gi"
import {FaShoppingCart} from "react-icons/fa"
import {HiThumbUp} from "react-icons/hi"
import {FiInstagram} from "react-icons/fi"
import {HiFlag} from "react-icons/hi"
import {FaAddressCard} from "react-icons/fa"
import {TiMessages} from "react-icons/ti"
import "./dashboardCard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Choose a goal</h2>
      <div className="dashboard-grid container">
        <div className="dashboard-card ">
          <div className="icon-cont">
          <GiArrowCursor className="card-icon" />
          </div>
          <p className="card-text">Get more website visitors</p>
          <p className="card-recommend">Recommended</p>
        </div>
        <div className="dashboard-card">
        <div className="icon-cont">
          <FaShoppingCart className="card-icon" />
          </div>
          <p className="card-text">Get more website purchase</p>
        </div>
        <div className="dashboard-card">
        <div className="icon-cont">
          <HiThumbUp className="card-icon" />
        </div>
          <p className="card-text">Boost a post</p>
        </div>
        <div className="dashboard-card">
        <div className="icon-cont">
          <FiInstagram className="card-icon" />
          </div>
          <p className="card-text">Boost an Instagram post</p>
        </div>
        <div className="dashboard-card">
        <div className="icon-cont">
          <TiMessages className="card-icon" />
          </div>
          <p className="card-text">Get more message</p>
        </div>
        <div className="dashboard-card">
        <div className="icon-cont">
          <HiFlag className="card-icon" />
          </div>
          <p className="card-text">Promote your page</p>
        </div>
        <div className="dashboard-card">
        <div className="icon-cont">
          <FaAddressCard className="card-icon" />
          </div>
          <p className="card-text">Get more leads</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;