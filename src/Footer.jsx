import React from "react";
import logos from "./assets/logos.png";
import footer from "./assets/footer.png";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-wrapper-left">
              <img src={logos} alt="" />
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Advertise with Us</p>
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
            </div>
            <div className="footer-wrapper-middle">
                <h5>Quick Links</h5>
              <p>Home</p>
              <p>Parliament Performance</p>
              <p>MPs Performance</p>
              <p>Rate Your MPs</p>
              <p>News & Videos</p>
              <p>Public Voice</p>
              <p>Our MPs</p>
              <p>PF Experts</p>
              <p>Parliamentry Blog</p>
              <p>Wish your Mp's</p>
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
              <BsYoutube />
              <BsLinkedin />
              <BsInstagram />
            </div>
          </div>

          <div className="f-img">
            <img src={footer} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
