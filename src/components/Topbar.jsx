import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import pflogo from "../assets/pflogo.png";
import { BsSearch } from "react-icons/bs";
import Slider from "react-slick";
import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
  const [currentDate, setCurrentDate] = useState('Loading...');

  useEffect(() => {
    const formatDate = (date) => {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const day = days[date.getDay()];
      const dayOfMonth = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day}, ${dayOfMonth < 10 ? '0' : ''}${dayOfMonth}-${month < 10 ? '0' : ''}${month}-${year}`;
    };

    const fetchCurrentDate = async () => {
      try {
        const currentDate = new Date();
        const formattedDate = formatDate(currentDate);
        setCurrentDate(formattedDate);
      } catch (error) {
        console.error('Error fetching current date:', error);
        setCurrentDate('Error fetching date');
      }
    };

    fetchCurrentDate();
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="adtopbar"
          style={{
            
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
      <div className="topbarcontainer" style={{  }}>
        <div className="slidercontent">
        <div className="topbarbox" style={{ border: "none", background: "#1b316a", height: "2rem", width: "6rem", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center",marginRight:"1rem" }}>
          <p style={{ fontSize: "11px", fontWeight: "bold", color: "#fff" }}>TRENDING NOW</p>
        </div>
        <div className="topbarslider">
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
        <div className="date-icon" style={{flexDirection:'column'}}>
        <div className="socialIcons">
        <i className="bi bi-facebook" style={{ marginRight: "15px" }}></i>
        <i className="bi bi-whatsapp" style={{ marginRight: "15px" }}></i>
        <i className="bi bi-linkedin" style={{ marginRight: "15px" }}></i>
        <i className="bi bi-twitter-x" style={{ marginRight: "13px" }}></i>
        </div>
        <div className="datecontainer">
          <p style={{fontWeight:'bold',fontSize:'12px'}}>{currentDate}</p>
        </div>
      </div>
      </div>

      <Navbar expand="lg" className="d-flex justify-content-center" style={{zIndex:'3'}}>
        <Container fluid>
          <Navbar.Brand href="#" className="text-center w-100">
            <div className="navbarbox">
            <div className="d-flex align-items-end justify-content-center">
              <img
                src={pflogo}
                alt=""
                style={{ }}
              />
              </div>
              <div className="brandtextbox">
              <p className="brand-text">Representatives<br/>At Work</p>
            </div>
            </div>
            
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Topbar;
