import { Link } from "react-router-dom"
function Home() {
    return(
        <>
           
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
                  // src="https://maps.app.goo.gl/vbxLoDZU9WRALTSu8"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1664020.6397147363!2d74.09122453821446!3d31.02010591112654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8fbd263103a38861!2sPunjab!5e1!3m2!1sen!2sin!4v1746515432112!5m2!1sen!2sin"
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

</>

    )
}
export default Home