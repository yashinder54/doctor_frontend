export default function PatientFooter(){
    return(
        <>

<div className="footer_section">
    <div className="container">
      {/* <div className="input_bt">
        <input
          type="text"
          className="mail_bt"
          placeholder="Enter Your Email"
          name="Enter your email"
        />
        <span className="subscribe_bt" id="basic-addon2">
          <a href="#">Subscribe</a>
        </span>
      </div> */}
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
                {/* <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li> */}
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
              <img src="/assets/images/img-4.png" />
              <span className="padding_15">Normal distribution</span>
            </div>
            <div className="dryfood_text">
              <img src="/assets/images/img-5.png" />
              <span className="padding_15">Normal distribution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
        </>
    )
}
