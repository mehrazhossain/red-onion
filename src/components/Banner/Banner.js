import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import './Banner.css';
import banner from '../../images/bannerbackground.jpg';

const Banner = () => {
  return (
    <>
      <div class="bg-img">
        <h1>Hello, Everyone!</h1>
      </div>
    </>
    // <div className="banner">
    //   <img src={banner} className="img-fluid" alt="" />
    //   <h1 className="heading">Hello, World!</h1>
    // </div>
  );
};

export default Banner;
