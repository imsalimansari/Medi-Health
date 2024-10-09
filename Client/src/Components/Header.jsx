import React from 'react'
import './Header.css'
import logo from '../../src/assets/logo.png';
import toggle_dark from '../../src/assets/day.png';
import toggle_light from '../../src/assets/night.png';
import search_icon_dark from '../../src/assets/search-b.png';
import search_icon_light from '../../src/assets/search.png';

const Header = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo image" className='logo'/>
        

        
        
        {/* <img src={toggle_light} alt="" className='toggle-icon'/> */}

        <div className="search-box">
            <input type="text" placeholder='Search' />
            <img src={search_icon_light} alt="" />
        </div>
        {/* <ul>
            <li>Home</li>
            <li>About</li>
            <li>Health Information</li>
            <li>Careers</li>
            <li>Contact Us</li>
        </ul> */}

        <div className="login">
            <button>Login</button>
        </div>
    </div>
  )
}

export default Header