import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = ({ img, text, url, key }) => {
  return (
    <Link to={url} className='navbar__item'>
        <div className='navbar__item-img'>{img}</div>
        <p className='navbar__item-text'>{text}</p>
    </Link>
  )
}

export default NavButton;