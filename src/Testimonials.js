import React, { Component } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import ReactPlayer from 'react-player';
import logoimage from './assets/forameal-blackonwhite.png'



class Video extends Component {
    render() {
      return (
        <div className="video">
          <ReactPlayer
            url='https://www.youtube.com/watch?v=x35Una84Flo'
            className='react-player'
            playing
            width='50%'
            height='100%'
            muted='true'
            controls='true'
            />
        </div>
      );
    }
  }


  const Testimonials = () => {
    return (
        <div>
            <Navbar />
            
            <div className="testimonials">
                <img src={logoimage} id="logo" alt="Logo" />
            </div>

            <a href= '/Testimonials'></a>   
                <div className='Testimonials'>     
                    <h1> TESTIMONIALS</h1>    
                    <h3> FORaMeal is a not-for-profit charity, run by the Rotary Club of Canterbury, which aims to encourage people to give their time to pack food for emergency supplies in South East Asian countries.  In our case, our Year 9 students at Tay Creggan were challenged with the responsibility of raising $3000 in order to run a packing event at school.  One of our staff gathered a team of students, and the fundraising began.</h3>

                    <p>
                    <br></br>
                    <br></br>
                    In conjunction with the fundraising, we had also been discussing FORaMEAL in our International Studies classes and in Pastoral periods – with the focus being on hands-on help. Val and the team from the Rotary Club also gave us posters and advertising material to display. Our teacher in charge also had a group of girls, who in conjunction with our food tech teacher, made large pots of dahl for everyone as lunch.  We established the following teams of interested students – many who had the dual purpose of completing their service hours for the Duke of Edinburgh Award with this activity:
                    <ul>
                    <li>Cooking team</li>
                    <li>Marketing team</li>
                    <li>Fundraising team</li>
                    <li>Event management team - including a pair of DJ's who compered, as well as accountants who did regular checks of much each table was packing.</li>
                    </ul>
                    <br></br>
                    <br></br>
                    On the day of the packing event – our students were very excited.  They were broken in half (approximately 60 students in each half) to rotate after 1 hour packing.  The Rotary Club members came and set up our entire Hall, including all the electrical cables, machinery etc, brought in a truck with all of the food supplies and unloaded it, set up each long table to form a production line of packing – and we were off!                    <br></br>
                    <br></br>
                    The music blared, our comperes gave us fun facts and kept updating the tally of the number of bags packed and Rotary Club members and Year 9 students worked alongside each other for the afternoon. It was a fun, energising and totally immersive afternoon, where we managed to pack over 18,000 emergency meals for people in need.  Our students felt like they had done something worthy and sincerely appreciated the opportunity.  It was a pleasure to work with Val and her team – their attention to detail and management from the initial introduction to the final truck leaving was fabulous – an experience many will never forget.                    </p>
                    Karyn Murray – Head of Tay Creggan – Year 9 Campus, Strathcona
                    <br></br>
                    <br></br>
                </div>
                <br></br>
            <Video />
            <Footer />
        </div>
    )
}

export default Testimonials;