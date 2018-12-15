import React, { Component } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'


const WhatWeDo = () => {
    return (
        <div>
            <Navbar />
            <a href= '/WhatWeDo'></a>   
                <div className='What-We-Do'>         
                    <h3> The Asia Pacific region claims the title of being one of the most disaster prone areas in the world.</h3>

                    <p>Last year alone, <strong> 4,987 people </strong> were killed and <strong> 34.5 million </strong> were affected by floods, storms and extreme temperatures. </p>
                    <br></br>

                    <p>The Asia Pacific region claims the title of being one of the most disaster-prone areas in the world, according to the UN Office for the Coordination of Humanitarian Affairs.</p>
                    <br></br>
                    
                    <p>The Pacific islands do not often make the lists of ‘significant disasters in the Asia Pacific region’, and this is in large part due to their population being much smaller than Asian countries. The size of these islands has absolutely no indication of the toll of natural disasters on them; it has been shown in the past that the impact can be much greater, with 80% of the population being affected at times.</p>
                    <br></br>

                    <p>These tragedies often lead to emergency relief being needed; however there is only so much help that people can give, especially in developing countries like the Philippines. Indigent citizens of the country are the ones that are most affected, especially in areas relating to proper nutrition.</p>
                </div>
            <Footer />
        </div>
    )
}





export default WhatWeDo;