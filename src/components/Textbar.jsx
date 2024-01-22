import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const linkStyle = {
  marginRight: '10px', 
  textDecoration: 'none',
  color: 'black', 
  padding: '8px', 
};

const Textbar = () => {
  return (
    <>
      <div className="textslide">
        <div className="container d-flex justify-content-between">
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/news-and-videos" style={linkStyle}>News & Videos</Link>
          <Link to="/public-voice" style={linkStyle}>Public Voice</Link>
          <Link to="/our-expert" style={linkStyle}>PF Experts</Link>
          <Link to="/parliament-blog" style={linkStyle}>Parliamentary blog</Link>
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic" style={{ ...linkStyle, fontSize: '18px'}}>
              MPs Section
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/parliament-performance" style={linkStyle}>Parliament Performance</Dropdown.Item>
              <Dropdown.Item as={Link} to="/rate-your-mp" style={linkStyle}>Rate Your MPs</Dropdown.Item>
              <Dropdown.Item as={Link} to="/our-mps" style={linkStyle}>Our MPs</Dropdown.Item>
              <Dropdown.Item as={Link} to="/wish-your-mp" style={linkStyle}>Wish your Mp</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Textbar;
