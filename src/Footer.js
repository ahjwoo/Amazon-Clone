import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <span>Back to top</span>
      </div>
      <div className="footer__bottom">
        <div className="footer__container">
          <h3>Get to Know Us</h3>
          <ul>
            <li>Careers</li>
            <li>Amazon and Our Planet</li>
            <li>Investor Relations</li>
            <li>Press Release</li>
          </ul>
        </div>
        <div className="footer__container">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell Under Amazon Accelerator</li>
            <li>Amazon Associates</li>
            <li>Sell on Amazon Handmande</li>
            <li>Advertise Your Products</li>
            <li>Independently Publish with Us</li>
            <li>Host on Amazon Hub</li>
          </ul>
        </div>
        <div className="footer__container">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>Amazon.ca Rewards Mastercard</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
            <li>Gift Cards</li>
            <li>Amazon Cash</li>
          </ul>
        </div>
        <div className="footer__container">
          <h3>Let us help you</h3>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Shipping Rates & Policies</li>
            <li>Amazon Prime</li>
            <li>Returns Are Easy</li>
            <li>Manage your Content and Devices</li>
            <li>Customer Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
