import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'



const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <a href= '/ContactUs'></a>            
            <h1>Contact Us</h1>
            <NameForm />
            <Footer />
        </div>
    )
}


class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Email submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Your name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        <br></br>
          <label>
            Your email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }



export default ContactUs;