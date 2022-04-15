import React from 'react';
import './Footer.css';
import logo from '../../images/logo2.png';

const Footer = () => {
  return (
    <div style={{ height: '320px' }} className="bg-dark w-100 footer p-5">
      <div className="row">
        <div className="col-md-6">
          <img style={{ height: '50px' }} src={logo} alt="" />
        </div>
        <div className="col-md-3">
          <p>About online food</p>
          <p>Read our blog</p>
          <p>Sign up to deliver</p>
          <p>Add your restaurant</p>
        </div>

        <div className="col-md-3">
          <p>Get help</p>
          <p>Read FAQs</p>
          <p>View all cities</p>
          <p>Restaurants near me</p>
        </div>
        <div className="col-md-9">
          <p>Copyright &copy; 2022 Onion Food</p>
        </div>
        <div className="col-md-3 p-2">
          <span>Privacy Policy.</span>
          <span className="px-2">Terms of use</span>
          <span>Pricing</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
