import React, { useState } from 'react'
import Logo from '../Pages/Assets/properlogo.png';
import { ReactComponent as Vector } from '../Pages/Assets/Vector.svg';
import './Header.css'
const Header = () => {
    return (
        <>
            <nav>
                <img src={Logo} className='logo' alt='no img' />
                <div className='search_box'>
                    <input placeholder='search hear' />
                    <span className='icon_search'><Vector className='vector'/></span>
                </div>
                <ol>
                    <li> <a>logout</a>  </li>
                </ol>
            </nav>
        </>
    )
}

export default Header