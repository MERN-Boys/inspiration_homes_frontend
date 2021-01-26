import {Switch, Link, Route} from 'react-router-dom'

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
      <Switch>
        <Route exact path="/gallery" render={() => <h1>gallery</h1>} />
        <Route exact path="/about" render={() => <h1>about</h1>} />
        <Route exact path="/contact" render={() => <h1>contact</h1>} />
        <Route exact path="/" render={() => <h1>home</h1>} />
      </Switch>
    </>
  );
};

export default Navbar;

