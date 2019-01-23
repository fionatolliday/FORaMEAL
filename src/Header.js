import React from 'react';
import image from './assets/forameal-whiteonblack.png'

const Header = () => {
    return (
        <div className='header-logo'>
            <header>
                <img src={image} alt="logo">
                </img>
            </header>
        </div>

    )
}



export default Header;