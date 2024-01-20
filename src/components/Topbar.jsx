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
   <div> <img src=" https://placehold.co/1519x150" /></div>
   <Navbar expand="lg" className="d-flex justify-content-center">
      <Container fluid>
        <Navbar.Brand href="#" className="text-center w-100"> {/* Add text-center and w-100 classes */}
          <img src={pflogo} alt="" width="300px" className="mx-auto mt-3" />
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
