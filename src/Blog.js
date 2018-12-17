import React, { Component } from 'react';

// class Blog extends Component {
//     render() {
//       return <h1> {this.props.title}</h1>;
//     }
//   }

const Blog = (props) => {
  
    return (
      <a href={props.blog}>
        <h1>{props.blog.title}</h1>
        <p>{props.blog.image}</p>
        <p>{props.blog.date}</p>
        <p>{props.blog.text}</p>
      </a>
    ) 
}



export default Blog;