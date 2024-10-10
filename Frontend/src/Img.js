import React from 'react';
import {Link } from 'react-router-dom';

export default function Img() {
    return (
        <>
            <style>{`
               
                .main {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #088F8F;
                    height: 89vh;
                    padding: 0 50px;
                }

                
                .text-container {
                    flex: 1;
                    color: white;
                    text-align: center;
                    margin-right: 20px;
                }

                .text-container h1 {
                    font-size: 3rem;
                    margin: 0;
                }

                .text-container h3 {
                    font-size: 1.8rem;
                    margin: 10px 0;
                }

               
                .image-container {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .image-container img {
                    max-width: 650px;
                    height: auto;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }

               
                @media (max-width: 768px) {
                    .main {
                        flex-direction: column;
                        padding: 20px;
                        text-align: center;
                    }

                    .text-container h1 {
                        font-size: 2.5rem;
                    }

                    .text-container h3 {
                        font-size: 1.5rem;
                    }

                    .image-container img {
                        width: 200px;
                        height: auto;
                    }
                }
            `}</style>

            <div className="main">
                <div className="text-container">
                    <h1>The Hospital that </h1>
                    <h1>Cares for You</h1>
                    <h3>Best Team's</h3>
                    <Link className="btn btn-dark ms-2 mt-3" style={{ height: "40px", width: "150px" }} to="/Doctors">View Details</Link>
                </div>
                <div className="image-container">
                    <img 
                        src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbSUyMG9mJTIwZG9jdG9yc3xlbnwwfHwwfHx8MA%3D%3D" 
                        alt="Team of Doctors"
                    />
                </div>      
            </div>
        </>
    );
}
