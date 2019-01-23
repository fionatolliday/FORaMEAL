import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const GetInvolved = () => {
    return (
        <div> 
            <Navbar />
            <div className="getinvolvedphoto">
                {/* <h1>GET INVOLVED</h1> */}
            </div>
            
            <a href= '/Get Involved'></a>   
                <div className='get-involved'>    
                    <h1> GET INVOLVED</h1> 
                    <h3> There are many ways you can assist with FORaMEAL's disaster relief efforts.</h3>
                    <br></br>
                    <div className="get-involved-flip-cards">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p>
                                Food packing: it's easy, fun and very social.
                                </p>
                            </div>
                            <div class="flip-card-back">
                                <p>You can get involved by packing 360 meals in two hours!
                                <br></br>
                                Yes! 50 volunteers together can pack 18,000 meals in two hours!!</p>
                            </div>
                        </div>
                        {/* <br></br> */}

                        <div class="card">
                            <div class="cardcontainer">
                                <p>Another way to get involved is to contribute to the cost of the meals.  A $10 donation will buy enough materials for a meal for 40 people.
                                </p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="cardcontainer">
                                <p>Volunteer your skills such as web design, graphic design, marketing and much more.  Come to a packing event and let us know where your creative skills could make a difference.
                                </p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="cardcontainer">
                                <p>Promote the FORaMEAL project to your employer and arrange a ‘Volunteer Day’ (see Corporate Involvement tab).
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            <Footer />

        </div>
    )
}


export default GetInvolved;