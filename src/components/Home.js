import { Link } from "react-router-dom"
function Home() {
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
                <Link to="/" className="nav-link">Home</Link>
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
            <Link to="/about" >About</Link>
              {/* <a href="about.html">About</a> */}
            </li>
            <li>
            <Link to="/treatment" >Treatment</Link>
              {/* <a href="treatment.html">Treatment</a> */}
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
        <form className="form-inline my-2 my-lg-0">
          <div className="search_btn">
            <li>
              <a href="#">
                <i className="fa fa-user" aria-hidden="true" />
                <span className="signup_text">Login</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-user" aria-hidden="true" />
                <span className="signup_text">Sign Up</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-search" aria-hidden="true" />
              </a>
            </li>
          </div>
        </form>
      </div>
    </div>
  
    {/* header section end */}
    {/* banner section start */}
    <div className="banner_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="banner_taital">We care Of You</h1>
            <p className="banner_text">
              When looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal distribution of letters, as opposed
              to{" "}
            </p>
            <div className="read_bt">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* banner section end */}
  </div>
  {/* header section end */}
  {/* appointment section start */}
  <div className="appointment_section">
    <div className="container">
      <div className="appointment_box">
        <div className="row">
          <div className="col-md-12">
            <h1 className="appointment_taital">
              Book <span style={{ color: "#0cb7d6" }}>Appointment</span>
            </h1>
          </div>
        </div>
        <div className="appointment_section_2">
          <div className="row">
            <div className="col-md-4">
              <p className="doctorname_text">Patient Name</p>
              <input
                type="text"
                className="email_text"
                placeholder=""
                name=""
              />
            </div>
            <div className="col-md-4">
              <form>
                <div className="form-group">
                  <p className="doctorname_text">Doctor's Name</p>
                  <select className="form-control" id="">
                    <option>Normal distribution </option>
                    <option>200</option>
                    <option>300</option>
                    <option>400</option>
                    <option>500</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="col-md-4">
              <form>
                <div className="form-group">
                  <p className="doctorname_text">Department's Name</p>
                  <select className="form-control" id="">
                    <option>Normal distribution </option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p className="doctorname_text">Phone Number</p>
              <input
                type="text"
                className="email_text"
                placeholder=""
                name=""
              />
            </div>
            <div className="col-md-4">
              <form>
                <div className="form-group">
                  <p className="doctorname_text">Department</p>
                  <select className="form-control" id="">
                    <option>Normal distribution</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="col-md-4">
              <p className="doctorname_text">Choose Date</p>
              <input id="datepicker" placeholder="Select Date" width={270} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* appointment section end */}
  {/* about section start */}
  <div className="about_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="about_taital">About Hospital</h1>
          <p className="about_text">
            {" "}
            has a more-or-less normal distribution of letters, as opposed to
            using 'Content here, content here', making it look like readable
            English. Many desktop publishing packages and web page editors has a
            more-or-less normal distribution of letters, as o
          </p>
          <div className="about_bt">
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about_img">
            <img src="assets/images/about-img.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* about section end */}
  {/* treatment section start */}
  <div className="treatment_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="treatment_taital">Hospital Treatment</h1>
        </div>
      </div>
      <div className="treatment_section_2">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <h1 className="number_text">01</h1>
            <h2 className="care_text">Nephrologist Care</h2>
            <p className="treatment_text">
              alteration in some form, by injected humour, or randomised words
              which don't look even slightly e sure there isn't anything
            </p>
            <div className="readmore_bt active">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h1 className="number_text">02</h1>
            <h2 className="care_text">Eye Care</h2>
            <p className="treatment_text_1">
              alteration in some form, by injected humour, or randomised words
              which don't look even{" "}
            </p>
            <div className="readmore_bt">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h1 className="number_text">03</h1>
            <h2 className="care_text">Pediatrician Clinic</h2>
            <p className="treatment_text_1">
              alteration in some form, by injected humour, or randomised words
              which don't look even
            </p>
            <div className="readmore_bt">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h1 className="number_text">04</h1>
            <h2 className="care_text">Prenatal Care</h2>
            <p className="treatment_text_1">
              alteration in some form, by injected humour, or randomised words
              which don't look even
            </p>
            <div className="readmore_bt">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* treatment section end */}
  {/* doctores section start */}
  <div className="doctores_section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="doctores_taital">Our doctores</h1>
        </div>
      </div>
      <div className="doctores_section_2">
        <div id="my_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-4">
                  <div className="doctores_box">
                    <div className="image_1">
                      <img src="assets/images/img-1.png" />
                    </div>
                    <h4 className="humour_text">
                      Humour <br />
                      <span className="mbbs_text">MBBS</span>
                    </h4>
                    <div className="social_icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="doctores_box">
                    <div className="image_1">
                      <img src="assets/images/img-2.png" />
                    </div>
                    <h4 className="humour_text">
                      Jenni <br />
                      <span className="mbbs_text">MBBS</span>
                    </h4>
                    <div className="social_icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="doctores_box">
                    <div className="image_1">
                      <img src="assets/images/img-3.png" />
                    </div>
                    <h4 className="humour_text">
                      Morco <br />
                      <span className="mbbs_text">MBBS</span>
                    </h4>
                    <div className="social_icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4">
                  <div className="doctores_box">
                    <div className="image_1">
                      <img src="assets/images/img-1.png" />
                    </div>
                    <h4 className="humour_text">
                      Humour <br />
                      <span className="mbbs_text">MBBS</span>
                    </h4>
                    <div className="social_icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="doctores_box">
                    <div className="image_1">
                      <img src="assets/images/img-2.png" />
                    </div>
                    <h4 className="humour_text">
                      Jenni <br />
                      <span className="mbbs_text">MBBS</span>
                    </h4>
                    <div className="social_icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="doctores_box">
                    <div className="image_1">
                      <img src="assets/images/img-3.png" />
                    </div>
                    <h4 className="humour_text">
                      Morco <br />
                      <span className="mbbs_text">MBBS</span>
                    </h4>
                    <div className="social_icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4">
                  <div className="doctores_box">
                    <div className="image_1">
                      <img src="assets/images/img-1.png" />
                    </div>
                    <h4 className="humour_text">
                      Humour <br />
                      <span className="mbbs_text">MBBS</span>
                    </h4>
                    <div className="social_icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="doctores_box">
                    <div className="image_1">
                      <img src="assets/images/img-2.png" />
                    </div>
                    <h4 className="humour_text">
                      Jenni <br />
                      <span className="mbbs_text">MBBS</span>
                    </h4>
                    <div className="social_icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="doctores_box">
                    <div className="image_1">
                      <img src="assets/images/img-3.png" />
                    </div>
                    <h4 className="humour_text">
                      Morco <br />
                      <span className="mbbs_text">MBBS</span>
                    </h4>
                    <div className="social_icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#my_slider"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" />
          </a>
          <a
            className="carousel-control-next"
            href="#my_slider"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-angle-right" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* doctores section end */}
  {/* testimonial section start */}
  <div className="testimonial_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="testimonial_taital">Our Testimonial</h1>
        </div>
      </div>
      <div className="customer_section_2">
        <div className="row">
          <div className="col-md-12">
            <div className="box_main">
              <div
                id="main_slider"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="customer_main">
                      <div className="customer_right">
                        <h3 className="customer_name">
                          Morijorch{" "}
                          <span className="quick_icon">
                            <img src="assets/images/quick-icon.png" />
                          </span>
                        </h3>
                        <p className="default_text">Default model text,</p>
                        <p className="enim_text">
                          editors now use Lorem Ipsum as their default model
                          text, and a search for 'lorem ipsum' will uncover many
                          web sites still in their infancy. Variouseditors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. Variouseditors now use Lorem
                          Ipsum as their default model text, and a search for
                          'lorem ipsum' will uncover many web sites still in
                          their infancy. Various
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="customer_main">
                      <div className="customer_right">
                        <h3 className="customer_name">
                          Morijorch{" "}
                          <span className="quick_icon">
                            <img src="assets/images/quick-icon.png" />
                          </span>
                        </h3>
                        <p className="default_text">Default model text,</p>
                        <p className="enim_text">
                          editors now use Lorem Ipsum as their default model
                          text, and a search for 'lorem ipsum' will uncover many
                          web sites still in their infancy. Variouseditors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. Variouseditors now use Lorem
                          Ipsum as their default model text, and a search for
                          'lorem ipsum' will uncover many web sites still in
                          their infancy. Various
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="customer_main">
                      <div className="customer_right">
                        <h3 className="customer_name">
                          Morijorch{" "}
                          <span className="quick_icon">
                            <img src="assets/images/quick-icon.png" />
                          </span>
                        </h3>
                        <p className="default_text">Default model text,</p>
                        <p className="enim_text">
                          editors now use Lorem Ipsum as their default model
                          text, and a search for 'lorem ipsum' will uncover many
                          web sites still in their infancy. Variouseditors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. Variouseditors now use Lorem
                          Ipsum as their default model text, and a search for
                          'lorem ipsum' will uncover many web sites still in
                          their infancy. Various
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#main_slider"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left" />
                </a>
                <a
                  className="carousel-control-next"
                  href="#main_slider"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* testimonial section end */}
  {/* contact section start */}
  <div className="contact_section layout_padding">
    <div className="container-fluid">
      <div className="contact_section_2">
        <div className="row">
          <div className="col-md-6">
            <h1 className="contact_taital">Get In Touch</h1>
            <form action="">
              <div className="mail_section_1">
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Name"
                  name="Name"
                />
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Phone Number"
                  name="Phone Number"
                />
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Email"
                  name="Email"
                />
                <textarea
                  className="massage-bt"
                  placeholder="Massage"
                  rows={5}
                  id="comment"
                  name="Massage"
                  defaultValue={""}
                />
                <div className="send_bt">
                  <a href="#">SEND</a>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6 padding_left_15">
            <div className="map_main">
              <div className="map-responsive">
                <iframe
                  src="https://maps.app.goo.gl/pMSn87pxjZKPMJB37"
                  width={600}
                  height={600}
                  frameBorder={0}
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* contact section end */}
  {/* footer section start */}
  <div className="footer_section">
    <div className="container">
      <div className="input_bt">
        <input
          type="text"
          className="mail_bt"
          placeholder="Enter Your Email"
          name="Enter your email"
        />
        <span className="subscribe_bt" id="basic-addon2">
          <a href="#">Subscribe</a>
        </span>
      </div>
      <div className="footer_section_2">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <h3 className="footer_taital">Address</h3>
            <div className="location_main">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span className="padding_15">
                      Making this the first true
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-phone" aria-hidden="true" />
                    <span className="padding_15">Call : +01 1234567890</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <span className="padding_15">Email : demo@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_social_icon">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h3 className="footer_taital">Useful Link</h3>
            <div className="footer_menu">
              <ul>
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="doctors.html">Doctors</a>
                </li>
                <li>
                  <a href="news.html">News</a>
                </li>
                <li>
                  <a href="treatment.html">Treatment</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h3 className="footer_taital">Help &amp; Support</h3>
            <p className="ipsum_text">
              Opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page
            </p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h3 className="footer_taital">News</h3>
            <div className="dryfood_text">
              <img src="assets/images/img-4.png" />
              <span className="padding_15">Normal distribution</span>
            </div>
            <div className="dryfood_text">
              <img src="assets/images/img-5.png" />
              <span className="padding_15">Normal distribution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* footer section end */}
  {/* copyright section start */}
  <div className="copyright_section">
    <div className="container">
      <p className="copyright_text">
        2024 All Rights Reserved. Design by{" "}
        <a href="https://html.design">Free Html Templates</a> Distribution By{" "}
        <a href="https://themewagon.com">ThemWagons</a>
      </p>
    </div>
  </div>
  {/* copyright section end */}
</>

    )
}
export default Home