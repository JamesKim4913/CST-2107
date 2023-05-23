// import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner-container">
        <img style={{width: '100%'}} src="https://plus.unsplash.com/premium_photo-1664297844174-d7dfb8d0e7f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
        <div className="banner-content">
         <h1 className="banner-title">User List</h1>
        </div>
    </section>
  )
}

export default Banner;