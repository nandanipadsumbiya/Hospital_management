import React from 'react';
import { Outlet, Link } from 'react-router-dom';


export default function Layout() {
    return (
        <>
            <div className="row">
                <div class="col-12">

                    <nav class="navbar navbar-expand-lg text-bg-secondary " style={{width:"1525px"}}>
                        <div class="container-fluid">
                            <a class="navbar-brand" href="/" style={{ fontSize: "30px" }}><b>LifeCare</b></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">

                            </div>
                            <div >
                                <ul className="navbar-nav"  style={{fontSize:"18px"}}>
                                    <li className="nav-item">
                                        <Link class="nav-link active" to="/Home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link class="nav-link active" to="/Doctors">Doctors</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link class="nav-link active" to="/Patients">Patients</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link class="nav-link active" to="/Imgs">Imgs</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link class="nav-link active" to="/Patient Review's">Patient Review's</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link class="nav-link active" to="/Contact Us">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>


                </div>
            </div>

            <div className='row'>
                <Outlet />
            </div>

        </>


    )
}