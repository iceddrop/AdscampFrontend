import React from 'react'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#">Delivery & return</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Gift Packaging</a></li>
          <li><a href="#">Sizing</a></li>
          <li><a href="#">Account</a></li>
          <li><a href="#">Customer support</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Products</h4>
        <ul>
          <li><a href="#">Alternator & Depairs</a></li>
          <li><a href="#">Product Catalog</a></li>
          <li><a href="#">Styling</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <ul>
          <li>Obafemi Awolowo university</li>
          <li>+234-8131249294</li>
          <li>TimeSaver@watch.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;