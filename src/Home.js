import React, { Component } from 'react';
import Navbar from './Navbar';
import BuildBody from './BuildBody';
import handsin from './assets/hands-in.jpeg';
import Footer from './Footer';



const Home = () => {
    return ( 
        <div>
            <Navbar />
            <h1>FORaMEAL</h1>
            <BuildBody />
            <Footer />
        </div>
        
    )
}






export default Home;


