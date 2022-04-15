import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './CustomLink.css';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="link-div">
      <Link
        style={{
          fontWeight: match ? 'bold' : 'normal',
          textUnderlinePosition: match ? 'under' : 'auto',
          textDecoration: match ? 'underline' : 'none',
          textDecorationColor: match ? '#DC3545' : 'black',
          textDecorationThickness: match ? '2px' : 'auto',
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
