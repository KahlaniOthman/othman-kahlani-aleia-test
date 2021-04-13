import React from "react";

import logoAleia from "images/logo-aleia.png";
import facebook from "images/facebook.png";
import twitter from "images/twitter.png";
import linkedin from "images/linkedin.png";

import "./style.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src={logoAleia} alt="aleia" className="footer-top-img" />
        <div className="footer-top-input">
          <h2 className="footer-top-input-title">
            Send us your email to stay tuned
          </h2>
          <div className="footer-top-input-bottom">
            <input
              placeholder="yourmail@email.com"
              className="footer-top-input-bottom-text"
              type="text"
              name="email"
            />
            <span className="footer-top-input-bottom-label">xoxo</span>
          </div>
        </div>
        <div className="footer-top-logos">
          <h2 className="footer-top-logos-title">Follow us</h2>
          <div>
            <img src={facebook} alt="aleia" className="footer-top-logos-icon" />
            <img src={twitter} alt="aleia" className="footer-top-logos-icon" />
            <img src={linkedin} alt="aleia" className="footer-top-logos-icon" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2020. All rights reserved.</div>
    </footer>
  );
};
export default Footer;
