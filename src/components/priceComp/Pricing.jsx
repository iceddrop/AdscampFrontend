import PricingCard from './PricingCard'

const Pricing = () => {
  return (
    <div style={{display: "flex", fontSize:"20px", fontWeight:"bolder", flexDirection:"column"}} >
    <p style={{color:"#37517e", textAlign:"center"}}>Pricing</p>
    <p style={{color:"#37517e", margin:"1rem", fontSize:"1rem", textAlign:"center"}}>We Provide categories of packages, choose your plan </p>
    <div style={{display: "flex", justifyContent:"center", gap:"2rem", alignItems:"center"}}>
      <PricingCard color="#37517e" bg="white" title="Basic" price="$50" num={0} height="400px"/>
      <PricingCard color="white" bg="#37517e" title="Standard" price="$200" height="460px" num={1}/>
      <PricingCard color="#37517e" bg="white" title="Permium" price="$500" height="400px" num={2}/>
    </div>
    </div>
  ) 
}

export default Pricing
