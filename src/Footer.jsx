import React from "react";
import logos from "./assets/logos.png";
import footer from "./assets/footer.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer" style={{zIndex:'15'}}>
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-wrapper-left">
              <img src={logos} alt="" />
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
              <p>Advertise with Us</p>
              <p>Terms and Conditions</p>
            </div>
            <div className="footer-wrapper-middle">
              <h5>Quick Links</h5>
              <p>Home</p>
              <p>Our MPs</p>
              <p>PF Experts</p>
              <p>Public Voice</p>
              <p>Wish your Mp</p>
              <p>Rate Your MPs</p>
              <p>News & Videos</p>
              <p>MPs Performance</p>
              <p>Parliamentry Blog</p>
              <p>Parliament Performance</p>
            </div>
            <div className="footer-wrapper-right">
              <h5>About Parliamentary Fact</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                quam, nisi rem ipsum, error beatae amet consequuntur sequi,
                illum saepe cum dolores adipisci neque aspernatur? Consequatur
                officia itaque commodi iste!
              </p>
            </div>
            <div className="footer-wrapper-fourth">
              <h5>Contact with us</h5>
              <i className="bi bi-facebook" style={{ fontSize: '25px', color: '#cdcbcb', marginRight: "12px" }}></i>
              <i className="bi bi-whatsapp" style={{ fontSize: '25px', color: '#cdcbcb', marginRight: "12px" }}></i>
              <i className="bi bi-linkedin" style={{ fontSize: '25px', color: '#cdcbcb', marginRight: "12px" }}></i>
              <i className="bi bi-twitter-x" style={{ fontSize: '25px', color: '#cdcbcb', marginRight: "12px" }}></i>
            </div>
          </div>

          {/* <div className="f-img">
            <img src={footer} alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
