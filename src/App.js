import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import WhatWeDo from './WhatWeDo';
import NewsAndEvents from './NewsAndEvents';
import ContactUs from './ContactUs';
import ErrorPage from './ErrorPage';



class App extends Component {
  render() {
    const path = window.location.pathname;
    if (path === '/') {
      return <Home />
    } else if (path == '/WhatWeDo') {
      return <WhatWeDo />
    } else if (path == '/ContactUs') {
      return <ContactUs />
    } else if (path == '/NewsAndEvents') {
      return <NewsAndEvents />
    } else {
      return <ErrorPage />
    }
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }



export default App;
