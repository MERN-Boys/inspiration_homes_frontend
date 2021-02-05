import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'

export default function Footer(props) {
  const loggedInUser = props.loggedInUser
  const setLoggedInUser = props.setLoggedInUser

  const handleLogout = (e, form) => {
    e.preventDefault()
    fetch("http://localhost:5000/users/logout", {
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
      <div id="footerLogo">
        <h6>Inspiration homes</h6>
      </div>
      <div id="footerGreeting">
        {loggedInUser == false || loggedInUser == null ? (
          <>
            <Button style={{ marginRight: "5px" }}>
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
            <h6 style={{ padding: "5px" }}>Welcome {loggedInUser.name}</h6>
            <Button onClick={handleLogout} style={{ marginRight: "5px" }}>
              Logout
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
