import React from 'react';
import './Pricing.css';

const PricingCard = (props) => {
  const priceList = [
    {
      text1: "1 project",
      text2: "collaboration with team member",
      text3: "Access to limited resources",
      text4: "5 invitation to other users",
      text5: "Excellent standby support"
    },
    {
      text1: "3 projects",
      text2: "collaboration with team members",
      text3: "Access to unlimited resources",
      text4: "10 invitations to other users",
      text5: "Excellent standby support"
    },
    {
      text1: "5 projects",
      text2: "collaboration with team members",
      text3: "Access to unlimited resources",
      text4: "Unlimited invitations to other users",
      text5: "Excellent standby support"
    }
  ];
  
  const cardStyle = {
    padding: "2rem 3rem",
    boxShadow: "0px 4px 18px 0px rgb(0 0 0 / 30%)",
    width: "300px",
    height: props.height,
    color: props.color,
    backgroundColor: props.bg
  };
  
  const titleStyle = {
    fontSize: "20px",
    textAlign: "center"
  };
  
  const priceStyle = {
    textAlign: "center",
    fontSize: "25px",
    fontWeight: "bold"
  };
  
  const buttonStyle = {
    margin: "2rem auto",
    display: "block",
    padding: ".6rem 2rem",
    borderRadius: "8px",
    backgroundColor: props.color,
    color: props.bg,
    border: "0"
  };
  
  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{props.title}</h3>
      <div style={priceStyle}>{props.price} per month</div>
      <ul>
        {Object.values(priceList[props.num]).map((access, index) => (
          <li key={index}>{access}</li>
        ))}
      </ul>
      <button style={buttonStyle}>Get Started</button>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="pricing">
      <h2 className="pricing__title">Pricing</h2>
      <p className="pricing__subtitle">We provide categories of packages. Choose your plan.</p>
      <div className="pricing__cards">
        <PricingCard color="blue" bg="white" title="Basic" price="$50" num={0} height="400px" />
        <PricingCard color="white" bg="blue" title="Standard" price="$200" num={1} height="460px" />
        <PricingCard color="blue" bg="white" title="Premium" price="$500" num={2} height="400px" />
      </div>
    </div>
  );
};

export default Pricing;
