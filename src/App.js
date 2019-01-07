import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import WhatWeDo from './WhatWeDo';
import GetInvolved from './GetInvolved';
import ContactUs from './ContactUs';
import ErrorPage from './ErrorPage';



class App extends Component {
  render() {
    const path = window.location.pathname;
    if (path === '/') {
      return <Home />
    } else if (path === '/WhatWeDo') {
      return <WhatWeDo />
    } else if (path === '/GetInvolved') {
      return <GetInvolved />
    } else if (path === '/ContactUs') {
      return <ContactUs />
    } else {
      return <ErrorPage />
    }
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">

//       </div>
//     );
//   }
// }



export default App;
