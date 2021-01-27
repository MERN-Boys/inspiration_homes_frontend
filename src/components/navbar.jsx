import { Link } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function SiteNav() {
  return (
    <>
      <Navbar bg="light" expand="lg" style={{"height": "7vh", "min-height": "55px"}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{"width": "100%", "justifyContent": "space-around"}}>
            <Link to="/" className="nav-link" >Home</Link>
            <Link to="/gallery" className="nav-link" >Gallery</Link>
            <Link to="/about" className="nav-link" >About</Link>
            <Link to="/contact" className="nav-link" >Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default SiteNav;

