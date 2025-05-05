import Header from "./Header"
import Footer from "./Footer"
function About() {
    return(
        <>
  {/* about section start */}
  <div className="about_section layout_padding margim_90">
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
 
 
</>

    )
}

export default About