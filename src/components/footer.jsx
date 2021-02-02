import { Navbar } from "react-bootstrap";
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
      <div id="footLogo">
        <h6>Inspiration homes</h6>
      </div>
      <div id="footerGreeting">
        {loggedInUser == false || loggedInUser == null ? (
          <>  
            <Button>
              <Link to="/users/login" className="nav-link" >Login</Link>
            </Button>
            <Button >
              <Link to="/users/register" className="nav-link" >SignUp</Link>
            </Button>
          </>
        ) : (
          <>
            <h6 style={{"padding": "5px"}}>Welcome {loggedInUser.name}</h6>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        )}
      </div>


    </div>
  );
}
