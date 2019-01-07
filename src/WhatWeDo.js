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

                    <p>Last year alone, <strong> 4,987 people </strong> were killed and <strong> 34.5 million </strong> were affected by floods, storms and extreme temperatures in the Asia Pacific region. </p>
                    <br></br>

                
                    <p>These tragedies often lead to emergency relief being needed; however there is only so much help that people can give, especially in developing countries like the Philippines. Indigent citizens of the country are the ones that are most affected, especially in areas relating to proper nutrition.</p>
                </div>
            <Footer />
        </div>
    )
}





export default WhatWeDo;