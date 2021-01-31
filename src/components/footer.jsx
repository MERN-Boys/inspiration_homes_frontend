import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'

export default function Footer(props) {
  const loggedInUser = props.loggedInUser
  const setLoggedInUser = props.setLoggedInUser
  console.log(loggedInUser)

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
    <Navbar
      variant="light"
      bg="dark"
      style={{
        "alignItems": "center",
        "height": "7vh",
        "minHeight": "55px",
        "minWidth": "100",
        "display": "flex",
        "position": "fixed",
        "left": "0",
        "bottom": "0",
        "width": "100%",
        "height": "56px"
      }}
    >
      <div style={{ "width": "50vw", "display":"flex", "alignItems":"center" }}>
        <Navbar.Brand style={{"marginLeft":"3vw"}} href="#">inspiration homes</Navbar.Brand>
      </div>
      <div style={{ "width": "50vw" }}>
        {loggedInUser == false || loggedInUser == null
        ? 
        <>
          <Button style={{ "float": "right", "marginRight": "3vw" }}>
            <Link to="/users/login" className="nav-link" >Login</Link>
          </Button>
          <Button style={{ "float": "right", "marginRight": "5px" }}>
            <Link to="/users/register" className="nav-link" >SignUp</Link>
          </Button>
        </>
        :
          <>
            <div style={{ "width": "50vw", "display":"flex", "alignItems":"center", "justify-content":"flex-end" }}>
              <Navbar.Brand style={{"marginRight":"3vw"}} href="#">Welcome {loggedInUser.name}</Navbar.Brand>
              <Button onClick={handleLogout} style={{ "float": "right", "marginRight": "5px" }}>
                Logout
                {/* <Link to="/users/logout" className="nav-link" >Logout</Link> */}
              </Button>
            </div>
          </>
        }
      </div>
    </Navbar>
  );
}
