// UserProfile
import React from 'react'
import './UserProfile.css'

export default function UserProfile (){
    return(
        <div className="user-profile-page">
            
            {/* we can personalize this greeting once the user logs in */}
            <h5>Welcome back, "User" </h5>
            <button className="logout-button">Log Out</button>
            <h5>Create New Post:</h5>
            <section className="add-post-container">
                +
            </section>
            <h5>Your Recent Posts:</h5>
            {/* if we like this idea of showing the user's posts on their profile page, we will need an additional component that we map over in this section */}
            <section className="user-posts">
                <div className="user-post"></div>
                <div className="user-post"></div>
                <div className="user-post"></div>
                <div className="user-post"></div>
            </section>
        </div>
    )
}