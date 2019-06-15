import React from 'react';
import logo from './assets/logo-rotarycanterbury.png'
import meetuplogo from './assets/meetup.svg'
import facebooklogo from './assets/f_logo_RGB-Blue_58.png'

const Footer = () => {
    return (
            <footer>
                    <a href="https://www.canterburyrotary.org">
                        <img src={logo} alt="Rotary logo" />
                    </a>

                    <a href="https://www.meetup.com/en-AU/FORaMEAL-Emergency-Food-Relief-Packing-Volunteers/">
                        <img src={meetuplogo} id="meetup" alt="Meetup" />
                    </a>
                    
                    < a href="https://www.facebook.com/FORaMEAL/">
                    <img src={facebooklogo} id="facebook" alt="Facebook logo" />
                    </a>
            </footer>

    )
}


export default Footer;
