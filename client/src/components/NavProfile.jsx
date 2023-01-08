import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const NavProfile = () => {
  return (
    <div className='navbar__profile'>
        <AccountBoxIcon fontSize='large' className="navbar__item__profile-img"/>
        <p className='navbar__profile__item-text'>My Account</p>
    </div>
  )
}

export default NavProfile