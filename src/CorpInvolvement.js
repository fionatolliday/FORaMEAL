import React, { Component } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'


const CorpInvolvement = () => {
    return (
        <div> 
            <Navbar />
            <div className="corpinvolvedphoto">
                {/* <h1>GET INVOLVED</h1> */}
            </div>
            
            <a href= '/Get Involved'></a>   
                <div className='get-involved'>    
                    <h1> CORPORATE INVOLVEMENT </h1> 
                    <h3> FORaMEAL events have great appeal as they are fun, social and very satisfying for corporate participants as the raw materials are quickly and efficiently converted into thousands of packed meals for displaced families in our geographic region. </h3>
                    <br></br>
                    <h3>                              There are many ways that your organisation can participate in the FORaMEAL program:-
                    </h3>
                    <div className="get-involved-flip-cards">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p>
                                Arrange a meal-packing event
                                </p>
                            </div>
                            <div class="flip-card-back">
                                <p> usually involving 40-60 volunteers for about 2 hours.  This is a great investment in relationship building between and within work-groups.
                                Events can be structured for developing team-building, leadership and staff training.  This is also an opportunity for client engagement.
                                </p>
                            </div>
                        </div>
                        {/* <br></br> */}

                        <div class="card">
                            <div class="cardcontainer">
                                <p>Making a donation to assist with materials.  The FORaMEAL packs consist of rice, lentils, oats with added vitamins and minerals.  These materials need to be sourced commercially by Rotary. 
                                </p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="cardcontainer">
                                <p> Provide pro-bono services.  The FORaMEAL project could use help from the many creative and innovative service organisations.  We need help with marketing campaigns, web design, trucks, event management and much more.
                                </p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="cardcontainer">
                                <p>Pay an “Event Fee”.  As well as the cost of raw materials, additional funds are required to pay for sea-freight and packaging.  The Rotary Club also has a charity fund with enables affiliated community projects to be carried out locally and overseas. (Note that funds are not used for administrative purposes as all Rotarians give their time voluntarily).
                                </p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="cardcontainer">
                                <p>Become a Corporate Partner.  The FORaMEAL project can accommodate a wide range of in-kind and financial assistance from one-off contributions to ongoing help.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            <Footer />

        </div>
    )
}


export default CorpInvolvement;


      





