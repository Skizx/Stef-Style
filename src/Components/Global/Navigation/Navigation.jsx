import { Link } from 'react-router-dom'
import Stephlogo from '../../../Assets/Stephlogo.png'
import './navigation.scss'
import React from 'react';

const Navigation = () => {
    return (
        <>
        <div className='logo-container'>
            <img src={Stephlogo} className="logo-container_img" alt="Logo stephstyle" />
        </div>
            <nav className='navigation-container'>
                <Link to="/Presentation" className='navigation-container_link'>Présentation</Link>
                <Link to="/Home" className='navigation-container_link'>Accueil</Link>
                <Link to="/Contact" className='navigation-container_link'>Contact</Link>
                <Link to="/About" className='navigation-container_link'>A propos</Link>
            </nav>
        </>
    );
};

export default Navigation;