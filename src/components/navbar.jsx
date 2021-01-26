import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" >
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" style={{"justifyContent": "center"}}>
          <ul class="navbar-nav" style={{"width": "100%", "justifyContent": "space-around"}}>
            <li class="nav-item active">
              <Link to="/" className="nav-link" >Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/gallery" className="nav-link" >Gallery</Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="nav-link" >About</Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" className="nav-link" >Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

