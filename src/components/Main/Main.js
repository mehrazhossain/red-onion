import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Main.css';

const Main = () => {
  return (
    <div className="row">
      <div className="main-link">
        <CustomLink className="text-dark" to={'/'}>
          Breakfast
        </CustomLink>
        <CustomLink className="text-dark" to={'/lunch'}>
          Lunch
        </CustomLink>
        <CustomLink className="text-dark" to={'/dinner'}>
          Dinner
        </CustomLink>
      </div>
    </div>
  );
};

export default Main;
