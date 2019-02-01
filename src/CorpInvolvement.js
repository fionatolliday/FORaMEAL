import React, { Component } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'


const CorpInvolvement = () => {
    return (
        <div> 
            <Navbar />
            <div className="corpinvolvedphoto">
            </div>
            
            <a href= '/Get Involved'></a>   
                <div className='get-involved'>    
                    <h1> CORPORATE INVOLVEMENT </h1> 
                    
                    <h3> 
                        FORaMEAL events have great appeal.
                        <br></br>
                        They are fun, social and very satisfying for corporate participants as the raw materials are quickly and efficiently converted into thousands of packed meals for displaced families in our geographic region. 
                    </h3>
                </div>
                    
                    <h3>                              
                        There are many ways that your organisation can participate in the FORaMEAL program:
                    </h3>

                <div className="flip-container">

                    <div className="get-involved-flip-cards">
                        <div class="flip-card-inner-1">
                            <div class="flip-card-front">
                                <p>
                                <strong> ARRANGE A MEAL PACKING EVENT</strong>
                                </p>
                            </div>
                            <div class="flip-card-back">
                                <p> Get your collegues together and help us create a team of up to 60 volunteers all working to create meal packs for those in need.
                                <br></br>
                                
                                Events can be structured for developing team-building, leadership and staff training.  
                                
                                {/* This is also an opportunity for client engagement. */}
                                </p>
                            </div>
                        </div>
                    </div>
                    <br></br>
                
                    <div className="get-involved-flip-cards">
                        <div class="flip-card-inner-2">
                            <div class="flip-card-front">
                                <p>
                                    <strong>FINANCIAL DONATION</strong>
                                </p>
                            </div>

                            <div class="flip-card-back">
                                <p>
                                The FORaMEAL packs consist of rice, lentils, oats with added vitamins and minerals.  These materials need to be sourced commercially by Rotary.
                                </p>
                            </div>
                        </div>
                    </div> 
                    <br></br>   

                    <div className="get-involved-flip-cards">
                        <div class="flip-card-inner-3">
                            <div class="flip-card-front">
                                <p> 
                                <strong>PROVIDE PRO BONO SERVICES</strong>
                                </p>
                            </div>

                            <div class="flip-card-back">
                                <p>
                                The FORaMEAL project could use help from the many creative and innovative service organisations.  We need help with marketing campaigns, web design, trucks, event management and much more.
                                </p>
                            </div>
                        </div>
                    </div>  
                    <br></br>  

                    <div className="get-involved-flip-cards">
                        <div class="flip-card-inner-4">
                            <div class="flip-card-front">
                                <p>
                                <strong>PAY AN "EVENT FEE"</strong>
                                </p>
                            </div>

                            <div class="flip-card-back">
                                <p>
                                As well as the cost of raw materials, additional funds are required to pay for sea-freight and packaging.  The Rotary Club also has a charity fund with enables affiliated community projects to be carried out locally and overseas. (Note that funds are not used for administrative purposes as all Rotarians give their time voluntarily).
                                </p>
                            </div>
                        </div>
                    </div>    
                    <br></br>

                    <div className="get-involved-flip-cards">
                        <div class="flip-card-inner-5">
                            <div class="flip-card-front">
                                <p> 
                                <strong>BECOME A CORPORATE PARTNER</strong>
                                </p>
                            </div>

                            <div class="flip-card-back">
                            <p>
                            The FORaMEAL project can accommodate a wide range of in-kind and financial assistance, from one-off contributions to ongoing help.
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


      





