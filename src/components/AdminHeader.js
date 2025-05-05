import { Link } from "react-router-dom"
export default function AdminHeader(){
    return(
        <>

<div className="header_top_section">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="header_top_main">
            <div className="call_text">
              <a href="#">
                <span className="padding_right0">
                  <i className="fa fa-phone" aria-hidden="true" />
                </span>{" "}
                Call : +01 1234567890
              </a>
            </div>
            <div className="call_text_2">
              <a href="#">
                <span className="padding_right0">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>{" "}
                demo@gmail.com
              </a>
            </div>
            <div className="call_text_1">
              <a href="#">
                <span className="padding_right0">
                  <i className="fa fa-map-marker" aria-hidden="true" />
                </span>{" "}
                Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* header top section end */}
  {/* header section start */}
  <div className="header_section">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="index.html">
          <img src="assets/images/logo.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link to="/home" className="nav-link">Home</Link>
              {/* <a className="nav-link" href="index.html">
                Home
              </a> */}
            </li>
            <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
              {/* <a className="nav-link" href="about.html">
                About
              </a> */}
            </li>
            <li className="nav-item">
            <Link to="/treatment" className="nav-link">Treatment</Link>
              {/* <a className="nav-link" href="treatment.html">
                Treatment
              </a> */}
            </li>
            <li className="nav-item">
            <Link to="/doctor" className="nav-link">Doctors</Link>
              {/* <a className="nav-link" href="doctors.html">
                Doctors
              </a> */}
            </li>
            <li className="nav-item">
                <Link to="/blog" className="nav-link">Blog</Link>
              {/* <a className="nav-link" href="blog.html">
                Blog
              </a> */}
            </li>
            <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
              {/* <a className="nav-link" href="contact.html">
                Contact Us
              </a> */}
            </li>
           
          </ul>
          <form className="form-inline my-2 my-lg-0"></form>
        </div>
      </nav>
      <div className="custom_bg">
        <div className="custom_menu">
          <ul>
            <li className="active">
            <Link to="/" >Home</Link>
              {/* <a href="index.html">Home</a> */}
            </li>
            <li>
            <Link to="/admin/specialization" >Specialization</Link>
              {/* <a href="about.html">About</a> */}
            </li>
            <li>
            <Link to="/login" >Login</Link>
              {/* <a href="contact.html">Contact Us</a> */}
            </li>
            <li>
            <Link to="/doctor" >Doctors</Link>
              {/* <a href="doctors.html">Doctors</a> */}
            </li>
            <li>
            <Link to="/blog" >Blog</Link>
              {/* <a href="blog.html">Blog</a> */}
            </li>
            <li>
            <Link to="/contact" >Contact</Link>
              {/* <a href="contact.html">Contact Us</a> */}
            </li>
           
          </ul>
        </div>
   
      </div>
    </div>
  </div>
        
        </>
    )
}