import { FaShoppingCart, FiInstagram, GiArrowCursor, HiFlag, HiThumbUp, TiMessages } from 'react-icons/all';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Choose a goal</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <GiArrowCursor className="card-icon" />
          <p className="card-text">Get more website visitors</p>
          <p className="card-recommend">Recommended</p>
        </div>
        <div className="dashboard-card">
          <FaShoppingCart className="card-icon" />
          <p className="card-text">Get more website purchase</p>
        </div>
        <div className="dashboard-card">
          <HiThumbUp className="card-icon" />
          <p className="card-text">Boost a post</p>
        </div>
        <div className="dashboard-card">
          <FiInstagram className="card-icon" />
          <p className="card-text">Boost an Instagram post</p>
        </div>
        <div className="dashboard-card">
          <TiMessages className="card-icon" />
          <p className="card-text">Get more message</p>
        </div>
        <div className="dashboard-card">
          <HiFlag className="card-icon" />
          <p className="card-text">Promote your page</p>
        </div>
        <div className="dashboard-card">
          <FaAddressCard className="card-icon" />
          <p className="card-text">Get more leads</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;