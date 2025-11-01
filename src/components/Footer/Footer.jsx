import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
           Craving your favorite restaurant meal? Download MealBox and transform 
           the way you eat. We connect you to a vast menu of local flavors and 
           gourmet delights, delivering it all to your doorstep with incredible 
           speed. Forget complex cooking or time-consuming takeout calls—simply 
           tap, track your order in real-time, and unbox a perfectly prepared meal.
            Your next delicious bite is just a few clicks away!
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com">
              <img src={assets.facebook_icon} alt="facebook" />
            </a>
            <a href="https://x.com/prakulgupta2004">
              <img src={assets.twitter_icon} alt="twitter" />
            </a>
            <a href="https://www.linkedin.com/in/prakulgupta-bcs/">
              <img src={assets.linkedin_icon} alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+6006615682</li>
            <li>contact@Meal Box.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © MealBox.com</p>
    </footer>
  );
};

export default Footer;
