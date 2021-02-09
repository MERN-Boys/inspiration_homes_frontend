import { Link } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function SiteNav() {
  return (
    <>
      <Navbar bg="dark" expand="lg" style={{"minHeight": "55px", "maxWidth": "100vw"}} className="page-header" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{"zIndex": "999", "filter": "invert(100%)"}}/>
        <Navbar.Collapse id="basic-navbar-nav" style={{"zIndex": "999"}}>
          <Nav id="dropDownNavBox" className="mr-auto" style={{ "justifyContent": "spaceAround"}}>
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

