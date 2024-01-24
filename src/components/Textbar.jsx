import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const Textbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const linkStyle = {
    textDecoration: 'none',
    padding: '8px',
  };

  const dropdownStyle = {
    ...linkStyle,
    color: hoveredLink === 'MPs Section' ? 'rgb(27, 49, 106)' : 'black',
    fontWeight: hoveredLink === 'MPs Section' ? 'bold' : 'normal',
  };

  return (
    <>
      <div className="textslide textbar-container" style={{zIndex:'3'}}>
        <div className="container d-flex justify-content-between">
          <Link
            to="/" className="textbar-link"
            style={hoveredLink === 'Home' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontWeight: 'bold' } : linkStyle}
            onMouseEnter={() => setHoveredLink('Home')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Home
          </Link>
          <Link
            to="/news-and-videos" className="textbar-link"
            style={hoveredLink === 'News & Videos' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontWeight: 'bold' } : linkStyle}
            onMouseEnter={() => setHoveredLink('News & Videos')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            News & Videos
          </Link>
          <Link
            to="/public-voice" className="textbar-link"
            style={hoveredLink === 'Public Voice' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontWeight: 'bold' } : linkStyle}
            onMouseEnter={() => setHoveredLink('Public Voice')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Public Voice
          </Link>
          <Link
            to="/our-expert" className="textbar-link"
            style={hoveredLink === 'PF Experts' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontWeight: 'bold' } : linkStyle}
            onMouseEnter={() => setHoveredLink('PF Experts')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            PF Experts
          </Link>
          <Link
            to="/parliament-blog" className="textbar-link"
            style={hoveredLink === 'Parliamentary blog' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontWeight: 'bold' } : linkStyle}
            onMouseEnter={() => setHoveredLink('Parliamentary blog')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Parliamentary blog
          </Link>
          <Dropdown
            onMouseEnter={() => setHoveredLink('MPs Section')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Dropdown.Toggle variant="link" id="dropdown-basic" style={dropdownStyle}  className="textbar-link">
              <p>MPs Section</p>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to="/parliament-performance" className="textbar-link"
                style={hoveredLink === 'Parliament Performance' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontWeight: 'bold' } : linkStyle}
              >
                Parliament Performance
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="/rate-your-mp" className="textbar-link"
                style={hoveredLink === 'Rate Your MPs' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontWeight: 'bold' } : linkStyle}
              >
                Rate Your MPs
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="/our-mps" className="textbar-link"
                style={hoveredLink === 'Our MPs' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontWeight: 'bold' } : linkStyle}
              >
                Our MPs
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="/wish-your-mp" className="textbar-link"
                style={hoveredLink === 'Wish your Mp' ? { ...linkStyle, color: 'rgb(27, 49, 106)', fontWeight: 'bold' } : linkStyle}
              >
                Wish your Mp
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Textbar;
