import React, { Component } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import image from './assets/packing_bags.jpeg'


class CorpInvolvement extends Component {

    componentDidMount() {
        this.showSlides();
        
    }

    showSlides = () => {
        var slideIndex = 0;
        // this.showSlides();
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1} 
        slides[slideIndex-1].style.display = "block"; 
         // Change image every 2 seconds
        setTimeout(this.showSlides, 2000);

      }

      render() {
          return (
              <div>
                  <Navbar />
                  <div className="corpinvolvementphoto">
                      {/* <h1>CORPORATE INVOLVEMENT</h1> */}
                  </div>
      
                  
      
                  <a href= '/corporate involvement'></a>   
                      <div className='corp-involvement'> 
                          <h1>CORPORATE INVOLVEMENT</h1>
                          <div>
                              <p>
                              FORaMEAL events have great appeal as they are fun, social and very satisfying for corporate participants as the raw materials are quickly and efficiently converted into thousands of packed meals for displaced families in our geographic region. 
                              <br></br>
                              There are many ways that your organisation can participate in the FORaMEAL program:-
                              <br></br>
                              Arrange a meal-packing event (perhaps a Volunteer Day) usually involving 40-60 volunteers for about 2 hours.  This is a great investment in relationship building between and within work-groups.
                              <br></br>
                              Events can be structured for developing team-building, leadership and staff training.  This is also an opportunity for client engagement.
                              <br></br>
                              Making a donation to assist with materials.  The FORaMEAL packs consist of rice, lentils, oats with added vitamins and minerals.  These materials need to be sourced commercially by Rotary. 
                              <br></br>
                              Provide pro-bono services.  The FORaMEAL project could use help from the many creative and innovative service organisations.  We need help with marketing campaigns, web design, trucks, event management and much more.
                              <br></br>
                              Pay an “Event Fee”.  As well as the cost of raw materials, additional funds are required to pay for sea-freight and packaging.  The Rotary Club also has a charity fund with enables affiliated community projects to be carried out locally and overseas. (Note that funds are not used for administrative purposes as all Rotarians give their time voluntarily).
                              <br></br>
                              Become a Corporate Partner.  The FORaMEAL project can accommodate a wide range of in-kind and financial assistance from one-off contributions to ongoing help.
                              <br></br>
                              See video
                              <br></br>
                              Contact Us page
                              </p>
                          </div>
      
                      </div>
      
      
      
                      {/* <!-- Slideshow container --> */}
      <div class="slideshow-container">
      
          {/* <!-- Full-width images with number and caption text --> */}
          <div class="mySlides fade">
              <div class="numbertext">1 / 3</div>
              <img src={image} />
              <div class="text">Meal Packing Events</div>
          </div>
      
          <div class="mySlides fade">
              <div class="numbertext">2 / 3</div>
              <img src={image} />
              <div class="text">Donate</div>
          </div>
      
          <div class="mySlides fade">
              <div class="numbertext">3 / 3</div>
              <img src={image} />
              <div class="text">Provide Professional Services</div>
          </div>
      
        {/* <!-- Next and previous buttons --> */}
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>
          </div>
          <br></br>
      
      {/* <!-- The dots/circles --> */}
          <div style={{textAlign: 'center'}}>
          <span class="dot" onclick="currentSlide(1)"></span> 
          <span class="dot" onclick="currentSlide(2)"></span> 
          <span class="dot" onclick="currentSlide(3)"></span> 
          </div>
      
      
                      
                  <Footer />
              </div>
          )

      }
}




export default CorpInvolvement;