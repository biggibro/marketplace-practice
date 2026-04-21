import React from 'react';

import './Footer.css';

export const Footer = () => {
  return (
    <>
      <div className="containerFooter">
        <div className="columnFooter">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
        </div>

        <div className="columnFooter">
          <h4>Support</h4>
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
          <a href="#">Shipping</a>
        </div>

        <div className="columnFooter">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Returns</a>
        </div>

        <div className="columnFooter newsletterColumn">
          <h4>Newsletter</h4>
          <p>Subscribe for exclusive deals</p>
          <div className="newsletter">
            <input type="email" placeholder="Email" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="infoFooter">
          <p>© 2026 TechStore. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};
