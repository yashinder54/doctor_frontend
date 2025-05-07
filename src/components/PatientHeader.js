import { Link } from 'react-router-dom'; // Only if you're using React Router
import React from 'react';
export default function PatientHeader() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#" style={{textAlign:"left"}}>Doctor Appointment</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/user/viewspecialist'}>Specialization</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/user/viewbook'}>Booking</Link>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Schedule
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={'/user/viewschedule'}>view</Link></li>
                {/* <li><Link className="dropdown-item" to={'/admin/viewspecialization'}>View</Link></li> */}
              </ul>

              
            </li>

 <li className="nav-item">
              <Link className="nav-link" to={'/login'}>Logout</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
