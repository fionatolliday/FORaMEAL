import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'


const WhatWeDo = () => {
    return (
        <div>
            <Navbar />
            <a href= '/WhatWeDo'></a>   
                <div className='What-We-Do'>         
                    {/* <h3> The Asia Pacific region claims the title of being one of the most disaster prone areas in the world.</h3> */}

                    <p>Canterbury Rotary Club is part of Rotary’s Global Network of 33,000 clubs in over 200 countries with 1.2 million members.   Australia has 1,100 clubs.
                    
                    <br></br>
                    Canterbury Rotary runs community and international projects.  One such project is the annual medical missions in the Philippines conducted for the last 22 years .
                    <br></br>
                    FORaMEAL is another key international project and its supply chain is run by volunteers with no additional administration costs.
                    </p>
                </div>
            <Footer />
        </div>
    )
}





export default WhatWeDo;