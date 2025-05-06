import Header from "./Header"
import Footer from "./Footer"
function Contact() {
    return(
        <>

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
export default Contact