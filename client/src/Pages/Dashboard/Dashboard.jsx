import React from 'react'
import { Link } from 'react-router-dom'
import './dashboard.css'


const Dashboard = () => {


    return (
        <>
            <h2>Dashboard</h2>
            <div className="important-message">
                <p className="important-text">
                    Verify Your Email Address
                </p>
                <button className="important-action">Verify</button>
            </div>

            <div className="small-cards">
                <div className="small-card">
                    <div className="badge"></div>
                    <h3>Blood Group</h3>
                    <p>B+</p>
                </div>

                <div className="small-card">
                    <div className="badge"></div>
                    <h3>Total Donation</h3>
                    <p>8</p>
                </div>

                <div className="small-card">
                    <div className="badge"></div>
                    <h3>Pending Requests</h3>
                    <p>3</p>
                </div>

                <div className="small-card">
                    <div className="badge"></div>
                    <h3>Total Requests</h3>
                    <p>8</p>
                </div>
            </div>

            <article className="recent-container">
                <header>
                    <h2>Recent Requests</h2>
                    <Link className="view-all-action-button button" to="/requests">View All Requests</Link>
                </header>
                <div className="recent-contents">
                    <div className="recent-content">
                        <div className="text-badge">B+</div>
                        <div className="request-name">Shovit Banjade</div>
                        <div className="request-address">Butwal</div>
                        {/* <Link to={`/${id}`}>View</Link> */}
                    </div>
                    <div className="recent-content">
                        <div className="text-badge">A+</div>
                        <div className="request-name">Aashish Dhungana</div>
                        <div className="request-address">Butwal</div>
                        {/* <Link to={`/${id}`}>View</Link> */}
                    </div>
                </div>
            </article>
        </>
    )
}

export default Dashboard
