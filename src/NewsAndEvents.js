import React, { Component } from 'react';
import Navbar from './Navbar'
import Blog from './Blog'

const NewsAndEvents = () => {
    const blogs = {
        blogPosts: [
            {
                title: "news",
                date: "12/12/12",
                text: "open ended",
                image: "url"
            },
            {
                title: "event",
                date: "10/10/10",
                text: "open ended",
                image: "url"
            }]
    }


    return (
        <div> 
            <Navbar />
            <h1>News and Events</h1>
            
                {blogs.blogPosts.map(blog => {
                    return (
                    <Blog
                    blog={blog} 
                    />
                    )
                })
            }
        </div>
    )
}


export default NewsAndEvents;