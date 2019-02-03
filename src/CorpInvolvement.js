import React, { Component } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import logoimage from './assets/forameal-blackonwhite.png'


const CorpInvolvement = () => {
    return (
        <div> 
            <Navbar />
            <div className="corpinvolvedphoto">
            <img src={logoimage} id="logo" alt="Logo" />
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
                                <p> We need up to 60 volunteers at each event.
                                    Get your colleagues together and help us create a team all working to create meal packs for those in need.
                                <br></br>
                                    Join us for team-building and developing leadership skills.
                                </p>
                            </div>
                        </div>
                    </div>
                    <br></br>
                
                    <div className="get-involved-flip-cards">
                        <div class="flip-card-inner-2">
                            <div class="flip-card-front">
                                <p>
                                    <strong>TAX DEDUCTABLE DONATION</strong>
                                </p>
                            </div>

                            <div class="flip-card-back">
                                <p>
                                Provide a financial donation to help us pay for cereal, packaging and freight to Asia.
                                <br></br>
                                (Ask us for details on how to claim tax deduction)
                                </p>
                            </div>
                        </div>
                    </div> 
                    <br></br>   

                    <div className="get-involved-flip-cards">
                        <div class="flip-card-inner-3">
                            <div class="flip-card-front">
                                <p> 
                                <strong>DONATE SERVICES</strong>
                                </p>
                            </div>

                            <div class="flip-card-back">
                                <p>
                                FORaMEAL needs help with marketing campaigns, web design, trucks, event management and much more.
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
                                Pay for an entire packing event. 
                                <br></br>
                                Each event costs $4,500 which only covers the cost of cereal and packaging.
                                </p>
                            </div>
                        </div>
                    </div>    
                    <br></br>

                </div>
            <Footer />

        </div>
    )
}


export default CorpInvolvement;


      





