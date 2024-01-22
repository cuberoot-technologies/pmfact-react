import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import pflogo from "../assets/pflogo.png";
import { BsSearch } from "react-icons/bs";
import Slider from "react-slick";

function Topbar() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          style={{
            width: '84%',
            height: '100px',
            backgroundColor: 'rgb(27 49 106)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="https://placehold.co/1920x150"
            alt=""
            className="img-fluid"
            style={{ width: '70%', height: '80%', objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className="topbarcontainer" style={{ marginTop: "20px", display: "flex", }}>
        <div className="topbarbox" style={{ border: "none", background: "#1b316a", height: "2rem", width: "6rem", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "1rem", marginLeft:"7.5rem" }}>
          <p style={{ fontSize: "11px", fontWeight: "bold", color: "#fff" }}>TRENDING NOW</p>
        </div>
        <div className="topbarslider" style={{ width: "50%" }}>
          <Slider {...settings}>
            <div className="topbarslider-content">
              <p>People Celebrate Diwali all across India on 22 January 2024</p>
            </div>
            <div className="topbarslider-content">
              <p>The Ayodhya Blockbuster, Starring Amit Shah, Yogi Adityanath and many more</p>
            </div>
            <div className="topbarslider-content">
              <p>"Let's Not Talk Of Ravan Today": Himanta Biswa Sarma's Swipe At Rahul Gandhi</p>
            </div>
            <div className="topbarslider-content">
              <p>"Seek Lord Ram's Forgiveness, Because...": PM Modi On Ayodhya Temple</p>
            </div>
            <div className="topbarslider-content">
              <p>Over 1,000 km From Ayodhya, Another Ram Temple Inaugurated</p>
            </div>
            <div className="topbarslider-content">
              <p>Rahul Gandhi, Denied Entry In Temple, Asks "What Crime Have I Committed?"</p>
            </div>
          </Slider>
        </div>
      </div>

      <Navbar expand="lg" className="d-flex justify-content-center">
        <Container fluid>
          <Navbar.Brand href="#" className="text-center w-100">
            <div className="d-flex align-items-end justify-content-center">
              <img
                src={pflogo}
                alt=""
                className="img-fluid mx-auto mt-3"
                style={{ maxWidth: "500px" }}
              />
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Topbar;