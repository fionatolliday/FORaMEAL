import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import BuildBody from './BuildBody';
// import handsin from './assets/hands-in.jpeg';
import Footer from './Footer';



const Home = () => {
    return ( 
        <div>
            <Navbar />
            <Header />
            {/* <h1>FORaMEAL</h1> */}
            <BuildBody />
            <Footer />
        </div>
        
    )
}






export default Home;


