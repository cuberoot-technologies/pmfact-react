import React, { useState } from "react";
import { Link } from "react-router-dom";
import pflogo from "../assets/pflogo.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Textbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const linkStyle = {
    textDecoration: 'none',
    padding: '4px',
    display: 'inline-block',
  };

  const dropdownStyle = {
    ...linkStyle,
    color: hoveredLink === 'MPs Section' ? 'rgb(27, 49, 106)' : 'black',
    fontWeight: hoveredLink === 'MPs Section' ? 'bold' : 'bold',
  };

  return (
    <>
    <Navbar expand="lg" className="textslide textbar-container" style={{ zIndex: '3'}}>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="container d-flex align-items-center justify-content-center" style={{padding:'0'}}>
          <Link
            to="/"
            className="textbar-link"
            style={hoveredLink === 'Home' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontSize: '15px', fontWeight: 'bold' } : { ...linkStyle, fontWeight: 'bold' }}
            onMouseEnter={() => setHoveredLink('Home')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Home
          </Link>
          <Link
            to="/news-and-videos"
            className="textbar-link"
            style={hoveredLink === 'News & Videos' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontSize: '15px', fontWeight: 'bold' } : { ...linkStyle, fontWeight: 'bold' }}
            onMouseEnter={() => setHoveredLink('News & Videos')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            News & Videos
          </Link>
          <Link
            to="/public-voice"
            className="textbar-link"
            style={hoveredLink === 'Public Voice' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontSize: '15px', fontWeight: 'bold' } : { ...linkStyle, fontWeight: 'bold' }}
            onMouseEnter={() => setHoveredLink('Public Voice')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Public Voice
          </Link>
          <Link
            to="/parliament-blog"
            className="textbar-link"
            style={hoveredLink === 'Parliamentary blog' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontSize: '15px', fontWeight: 'bold' } : { ...linkStyle, fontWeight: 'bold' }}
            onMouseEnter={() => setHoveredLink('Parliamentary blog')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Blogs
          </Link>
          <Link
            to="/parliament-blog"
            className="textbar-link"
            style={hoveredLink === 'Parliamentary Performance' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontSize: '15px', fontWeight: 'bold' } : { ...linkStyle, fontWeight: 'bold' }}
            onMouseEnter={() => setHoveredLink('Parliamentary Performance')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Parliament Performance
          </Link>
          <NavDropdown className="custom-dropdown"
            title={<p className="moredropdown">...</p>}
            id="basic-nav-dropdown"
            style={dropdownStyle}
            onMouseEnter={() => setHoveredLink('MPs Section')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {/* <NavDropdown.Item
              as={Link}
              to="/parliament-performance"
              className="textbar-link"
              style={hoveredLink === 'Parliament Performance' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontSize: '15px', fontWeight: 'bold' } : { ...linkStyle, fontWeight: 'bold' }}
            >
              Parliament Performance
            </NavDropdown.Item> */}
            <NavDropdown.Item
              as={Link}
              to="/rate-your-mp"
              className="textbar-link"
              style={hoveredLink === 'Rate Your MPs' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontSize: '15px', fontWeight: 'bold' } : { ...linkStyle, fontWeight: 'bold' }}
            >
              Rate Your MPs
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/our-expert"
              className="textbar-link"
              style={hoveredLink === 'Rate Your MPs' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontSize: '15px', fontWeight: 'bold' } : { ...linkStyle, fontWeight: 'bold' }}
            >
              PF Experts
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/our-mps"
              className="textbar-link"
              style={hoveredLink === 'Our MPs' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontSize: '15px', fontWeight: 'bold' } : { ...linkStyle, fontWeight: 'bold' }}
            >
              Our MPs
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/wish-your-mp"
              className="textbar-link"
              style={hoveredLink === 'Wish your Mp' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontSize: '15px', fontWeight: 'bold' } : { ...linkStyle, fontWeight: 'bold' }}
            >
              Wish your Mp
            </NavDropdown.Item>
          </NavDropdown>
          </Nav>
    </Navbar.Collapse>
</Navbar>
    </>
  );
};

export default Textbar;
