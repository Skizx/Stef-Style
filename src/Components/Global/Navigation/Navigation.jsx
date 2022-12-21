import { Link } from 'react-router-dom';
import { NavigationData } from './NavigationData';
import Stephlogo from '../../../Assets/Stephlogo.png';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './navigation.scss'
import React, { useState } from 'react';

const Navigation = () => {

    const [sidebar, setSiderbar] = useState(false)

    const showMobilebar = () => setSiderbar(!sidebar)
    return (
        <>
        <div className='logo-container'>
            <img src={Stephlogo} className="logo-container_img" alt="Logo stephstyle" />
        </div>
            <div className='navbar'>
                <Link to="#" className='mobile-bars'>
                    <FaIcons.FaBars onClick={showMobilebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu_items' onClick={showMobilebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='mobile-bars mobile-bars_exit'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                        <p>Steph'Style Coiffure</p>
                    </li>
                    {NavigationData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Navigation;