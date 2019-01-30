import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const GetInvolved = () => {
    return (
        <div> 
            <Navbar />
            <div className="getinvolvedphoto">
            </div>
            
            <a href= '/Get Involved'></a>   
                <div className='get-involved'>    
                    <h1> GET INVOLVED</h1> 
                    <h3> 
                    Click to see how you can assist with FORaMEAL's disaster relief efforts.
                    </h3>
                    

                    <div className="get-involved-flip-cards">
                        <div class="flip-card-inner-1">
                            <div class="flip-card-front">
                                <p>
                                Food packing: it's easy, fun and very social.
                                </p>
                            </div>

                            <div class="flip-card-back">
                                <p>
                                You can get involved by packing 360 meals in two hours!
                                <br></br>
                                Yes! 50 volunteers together can pack 18,000 meals in two hours!!
                                </p>
                            </div>
                        </div>
                        <br></br>

                        <div class="flip-card-inner-2">
                            <div class="flip-card-front">
                                <p> Donate funds
                                </p>
                            </div>

                            <div class="flip-card-back">
                                <p>
                                Another way to get involved is to contribute to the cost of the meals.  A $10 donation will buy enough materials to feed 40 people one meal each.
                                </p>
                            </div>
                        </div>
                        <br></br>

                        <div class="flip-card-inner-3">
                            <div class="flip-card-front">
                                <p> 
                                Volunteer your professional skills to help grow this organisation.
                                </p>
                            </div>

                            <div class="flip-card-back">
                                <p>
                                Volunteer your skills such as web design, graphic design, marketing and much more.
                                </p>
                            </div>
                        </div>
                        <br></br>

                        <div class="flip-card-inner-4">
                            <div class="flip-card-front">
                                <p> 
                                Enjoy team bonding with your colleagues.
                                </p>
                            </div>

                            <div class="flip-card-back">
                                <p>
                                Promote the FORaMEAL project to your employer and arrange a ‘Volunteer Day’ (see Corporate Involvement tab)
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