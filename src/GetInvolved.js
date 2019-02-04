import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import logoimage from './assets/forameal-blackonwhite.png'



const GetInvolved = () => {
    return (
        <div> 
            <Navbar />
            <div className="getinvolvedphoto">
                <img src={logoimage} id="logo" alt="Logo" />
            </div>
            
            <a href= '/Get Involved'></a>   
                <div className='get-involved'>    
                    <h1> GET INVOLVED</h1> 
                    <h3> 
                    Discover how you can assist with FORaMEAL's disaster relief efforts.
                    </h3>
                </div>

                <div className="flip-container">

                    <div className="get-involved-flip-cards">
                        <div class="flip-card-inner-1">
                            <div class="flip-card-front">
                                <p>
                                <strong>FOOD PACKING: </strong>
                                <br></br>
                                It's easy, fun and very social.
                                </p>
                                
                            </div>

                            <div class="flip-card-back">
                                <p>
                                You can get involved by packing 360 meals in two hours!
                                <br></br>
                                Yes! 50 volunteers together can pack 18,000 meals in two hours!!
                                </p>
                                <br></br>
                                <a href="https://www.meetup.com/en-AU/FORaMEAL-Emergency-Food-Relief-Packing-Volunteers/" class="button"> Click to book</a>
                            </div>
                        </div>
                    </div>

                    <div className="get-involved-flip-cards">
                        <div class="flip-card-inner-2">
                            <div class="flip-card-front">
                                <p> <strong>DONATE FUNDS</strong>
                                </p>
                            </div>

                            <div class="flip-card-back">
                                <p>
                                A $10 donation will buy enough materials to feed 40 people one meal each.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flip-container">
                    <div className="get-involved-flip-cards">
                        <div class="flip-card-inner-3">
                            <div class="flip-card-front">
                                <p> 
                                <strong> VOLUNTEER YOUR PROFESSIONAL SKILLS </strong>
                                </p>
                            </div>

                            <div class="flip-card-back">
                                <p>
                                Volunteer your skills such as web design, graphic design, marketing and much more.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="get-involved-flip-cards">   
                        <div class="flip-card-inner-4">
                            <div class="flip-card-front">
                                <p> 
                                <strong>CORPORATE TEAM BONDING</strong>
                                </p>
                            </div>

                            <div class="flip-card-back">
                                <p>
                                Promote FORaMEAL to your employer, arrange a ‘Volunteer Day’ and enjoy team bonding with your colleagues
                                (see Corporate Involvement page)
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