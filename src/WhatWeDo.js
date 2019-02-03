import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import logoimage from './assets/forameal-blackonwhite.png'



const WhatWeDo = () => {
    return (
        <div>
            <Navbar />
            
            <div className="whatwedophoto">
                <img src={logoimage} id="logo" alt="Logo" />
            </div>
            <a href= '/WhatWeDo'></a>   
                <div className='What-We-Do'>     
                    <h1> WHAT WE DO</h1>    
                    <h3> The Asia Pacific region is one of the most disaster prone areas in the world causing widespread hunger and malnutrition, especially among children.</h3>

                    <p> FORaMEAL is an emergency food relief project organised by the Rotary Club of Canterbury.
                    <br></br>
                    <br></br>
                    Volunteers from all walks of life come together to fill meal packs, each of which will feed a family of six.
                    <br></br>
                    <br></br>
                    The heat-sealed packs consist of lentils, oats and rice in addition to a sachet of essential vitamins and minerals. The packs are then shipped to Rotary clubs in the Phillippines and stored in secure and hygienic locations, awaiting distribution for when a natural disaster occurs.
                    <br></br>
                    <br></br>
                    FORaMEAL is key international Rotary project. Its supply chain is run solely by volunteers with no additional administration costs.
                    </p>
                </div>
            <Footer />
        </div>
    )
}





export default WhatWeDo;