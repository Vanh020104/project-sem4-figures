import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if (userId) {
            axios
                .get(`http://localhost:8080/api/v1/users/${userId}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    if (response.data.code === 200) {
                        setUserData(response.data.data);
                    }
                })
                .catch((error) => {
                    console.error('There was an error fetching the user data!', error);
                });
        }
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div className="page-title-banner p-64">
                <div className="container">
                    <div className="content">
                        <a className="mb-16 cus-btn dark" href="/">
                            <i className="fas fa-chevron-left" />
                            Back to Home
                        </a>
                        <h1 className="mb-16">Profile</h1>
                        <p style={{ color: 'white' }}>
                            Learn More About Me: My Journey, Skills, and Passion. Explore My Background, Professional
                            Experience, <br /> and What Drives Me to Achieve Excellence in Everything I Do.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="profile-card">
                    <div className="profile-img">
                        <img
                            alt="Profile Image"
                            height={150}
                            src="https://storage.googleapis.com/a1aa/image/1gcDo9qCA04OIBQMbQiu3kytFJLqf5UbLqNZheTD4UuahbjTA.jpg"
                            width={150}
                        />
                    </div>
                    <div className="connect">
                        <i className="fas fa-user"></i>
                        Connect
                    </div>
                    <div className="message">
                        <i className="fas fa-comment"></i>
                        Message
                    </div>
                    <h2>{userData.username}</h2>
                    <h4>{userData.email}</h4>

                    <div className="stats">
                        <div>
                            <h3>07</h3>
                            <p>Orders</p>
                        </div>
                        <div>
                            <h3>12</h3>
                            <p>Favorite products</p>
                        </div>
                        <div>
                            <h3>01</h3>
                            <p>Feedback</p>
                        </div>
                    </div>
                    <a className="btn" href="#">
                        Show more
                    </a>
                </div>
            </div>
            {/* Blogs Area End */}
        </>
    );
}

export default Profile;
