import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'

export default function Footer(props) {
  const loggedInUser = props.loggedInUser
  const setLoggedInUser = props.setLoggedInUser
  const urlDomain = props.urlDomain

  const handleLogout = (e) => {
    e.preventDefault()
    fetch(`${urlDomain}/users/logout`, {
    // fetch("http://localhost:5000/users/logout", {
      body: null,
      method: "GET",
      headers: {
        'Content-Type': "application/json"
      },
      credentials: 'include'
    })
    .then(() => setLoggedInUser(false))
    // Send Data
  }

  return (
    <div id="footerContainer" className="page-footer">
      <div id="footerLogo"  style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={"/blue-house-hi3.png"} style={{height: "40px", marginLeft: "5px", marginRight: "10px"}}></img>
        <h6>Inspiration homes</h6>
      </div>
      <div id="footerGreeting" style={{ margin: "5px"}}>
        {loggedInUser == false || loggedInUser == null ? (
          <>
            <Button
              style={{ marginRight: "5px" }}
              onClick={() => console.log("login button clicked")}
            >
              <Link to="/users/login" className="nav-link" id="login">
                Login
              </Link>
            </Button>
            <Button style={{ marginRight: "5px" }}>
              <Link to="/users/register" className="nav-link" id="signup">
                SignUp
              </Link>
            </Button>
          </>
        ) : (
          <>
            <h6 style={{ marginRight: "10px", padding: "5px" }}>Welcome {loggedInUser.name}</h6>
            <Button className="text-nowrap" style={{ marginRight: "5px"}}>
              <Link to={`/users/${loggedInUser._id}`} className="nav-link">
                Edit Details
              </Link>
            </Button>
            <Button onClick={handleLogout} style={{ marginRight: "5px"}}>
              <Link to={""} className="nav-link">
                Logout
              </Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
