import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import './Banner.css';
import banner from '../../images/bannerbackground.jpg';

const Banner = () => {
  return (
    <>
      <div class="banner">
        <img src={banner} alt="" />
        <div className="overlay">
          <h2>Best food waiting for your belly</h2>
          <div className="input-area">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search food items"
                className="input-filed"
              />
              <InputGroup.Text
                className="bg-danger text-light search-btn"
                id="basic-addon2"
              >
                Search
              </InputGroup.Text>
            </InputGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
