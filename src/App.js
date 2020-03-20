import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import WhatWeDo from './WhatWeDo';
import GetInvolved from './GetInvolved';
import CorpInvolvement from './CorpInvolvement'
import ContactUs from './ContactUs';
import ErrorPage from './ErrorPage';
import Testimonials from './Testimonials';



class App extends Component {
  render() {
    const path = window.location.pathname;
    console.log(path)
    if (path === '/') {
      return <Home />
    } else if (path === '/WhatWeDo') {
      return <WhatWeDo />
    } else if (path === '/GetInvolved') {
      return <GetInvolved />
    } else if (path === '/CorpInvolvement') {
      return <CorpInvolvement />
    } else if (path === '/Testimonials') {
      return <Testimonials />
    } else if (path === '/ContactUs') {
      return <ContactUs />
    } else {
      return <ErrorPage />
    }
  }
}



export default App;
