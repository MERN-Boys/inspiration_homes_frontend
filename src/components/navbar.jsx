import { Link } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function SiteNav() {
  return (
    <>
      <Navbar bg="light" expand="lg" style={{
        "position": "fixed",
        "left": "0",
        "top": "0",
        "width": "100%",
        "height": "56px",
        "z-index":"999"
        }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{"width": "100%", "justifyContent": "space-around"}}>
            <Link to="/" className="nav-link" >Home</Link>
            <Link to="/jobs" className="nav-link" >Jobs</Link>
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

