import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import pflogo from "../assets/pflogo.png";
import { BsSearch } from "react-icons/bs";

function Topbar() {
  return (
    <>
      <div className="d-flex justify-content-center">
      <div
        style={{
          width: '80%',
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

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Topbar;