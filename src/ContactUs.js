import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'



const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <div className="contactusphoto">
                {/* <h1>CONTACT US</h1> */}
            </div>
            <a href= '/ContactUs'></a> 
            <NameForm />
            <Footer />
        </div>
    )
}

// This is for the form to submit
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}



class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      // this.handleChange = this.handleChange.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleMessageChange = this.handleMessageChange.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event) {
    //   this.setState({value: event.target.value});
    // }

    handleNameChange(event) {
      this.setState({name: event.target.value});
    }
    handleEmailChange(event) {
      this.setState({email: event.target.value});
    }
    handleMessageChange(event) {
      this.setState({message: event.target.value});
    }
  
    handleSubmit(event) {
      // This is for the form to submit
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })

      alert('Thank you. Your email has been submitted. ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
  
        <div classname="form">
          <h1>CONTACT US</h1>
          <h3>Please use the form below to contact us. 
            <br></br>
            A member of the FORaMEAL team will respond as soon as possible.
        </h3>
          <form onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />

            <label>
              Your name:
              <br></br>
              <input type="text" value={this.state.name} onChange={this.handleNameChange} />
              <br></br>
            </label>
          <br></br>

            <label>
              Your email address:
              <br></br>
              <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
              <br></br>
            </label>
            <br></br>

            <label>
              Message:
              <br></br>
              <textarea type="text" value={this.state.message} onChange={this.handleMessageChange} />
              <br></br>
            </label>

              <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }


export default ContactUs;