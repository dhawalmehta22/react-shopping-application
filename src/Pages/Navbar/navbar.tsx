import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/shopping-cart.svg';
import profile from '../../assets/profile.svg';
import hashedinLogo from '../../assets/logo_hashedin.png';


import './navbar.css';

const NavBar: React.FC = () => {

    return (

    <div className = "div-class">
    <div className="logo"><img src={hashedinLogo} alt="logo" /></div>
    <Link to={`/`}><div className="navbar-icon"><img src={profile} alt="profile"/></div></Link>
    <Link to={`/shopping-cart`}><div className="navbar-icon"><img src={cart} alt="cart"/></div></Link>
    <Link to={`/wishlist`}><div className="navbar-text">Wishlist</div></Link>
    <Link to={`/`}><div className="navbar-text">Courses</div></Link>
    </div>
    )

}


export default NavBar;
