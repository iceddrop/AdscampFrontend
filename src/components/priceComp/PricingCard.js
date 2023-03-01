import PriceCardAccess from './PriceCardAccess'
 
const PricingCard = (props) => {
    const priceList = [
        {
          text1: "1 project",
          text2: "collaboration with team member",
          test3: "Access to limited resourcess",
          test4: "5 invitation to other users",
          test5: "Excellent standby support"
        },
        {
            text1: "3 project",
            text2: "collaboration with team members",
            test3: "Access to unlimited resources",
            test4: "10 invitation to other users",
            test5: "Excellent standby support"
          },
          {
            text1: "5 project",
            text2: "collaboration with team members",
            test3: "Access to unlimited resources",
            test4: "unlimited invitation to other users",
            test5: "Excellent standby support"
          }
    ]
  return (
    <div style={{padding:"2rem 3rem", boxShadow:"0px 4px 18px 0px rgb(0 0 0 / 30%);", width:"300px", height:props.height, color:props.color, bg:props.bg}}>
      <p fontSize="20px" style={{textAlign:"center"}}>{props.title}</p>
      <p style={{textAlign:"center"}}><strong style={{fontSize: "25px"}}>{props.price}</strong> Per Month</p>
      <PriceCardAccess obj1={priceList[props.num]} style={{color:props.color}}/>
      <button style={{margin:"2rem 30%", padding:".6rem 2rem", border:"0", borderRadius:"8px", backgroundColor:props.color, color:props.bg}}>Get Started</button>
    </div>
  )
}

export default PricingCard;