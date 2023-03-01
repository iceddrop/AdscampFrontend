import React from 'react'

const Footer = () => {
  const color = "#37517e";
  return (
    <div>
      <div style={{ flexDirection: "row", display: "flex", padding:"3rem 0", gap:"4rem", backgroundColor: color, justifyContent:"center", alignItems:"baseline", color:"white",}}>
        <div style={{flexDirection: "column", display: "flex", justifyContent:"flex-start", alignItems:"flex-start"}}>
            <a>Delivery & return</a>
            <a>FAQs</a>
            <a>Gift Packaging</a>
            <a>sizing</a>
            <a>Acount</a>
            <a>Customer support</a>
        </div>
        <div style={{flexDirection: "column", display: "flex", justifyContent:"flex-start", alignItems:"flex-start"}}>
            <a>Alternator & Depairs</a>
            <a>Product Catalog</a>
            <a>styling</a>
        </div>
        <div style={{flexDirection: "column", display: "flex", justifyContent:"flex-start", alignItems:"flex-start"}}>
            <a>Contact</a>
            <p>Obafemi Awolowo university</p>
            <p>+234-8131249294</p>
            <p>TimeSaver@watch.com</p>
        </div>
    </div>
    </div>
  )
}

export default Footer
