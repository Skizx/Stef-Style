import React from 'react';
// eslint-disable-next-line no-unused-vars
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si'
import * as MdIcons from 'react-icons/md';

export const NavigationData = [
    {
        title: 'Accueil',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'Présentation',
        path: '/Presentation',
        icon: <AiIcons.AiOutlineScissor />,
        cName: 'nav-text',
    },
    {
        title: 'A propos',
        path: '/About',
        icon: <SiIcons.SiAboutdotme />,
        cName: 'nav-text',
    },
    {
        title: 'Contact',
        path: '/Contact',
        icon: <MdIcons.MdContactMail />,
        cName: 'nav-text',
    },
]