import Jumbotron from "react-bootstrap/jumbotron";
import Container from "react-bootstrap/container";
import JobsPage from "./JobsPage.jsx"
import logo from "../images/logo.png"


function HomePage(props) {
  const loggedInUser = props.loggedInUser
  const setLoggedInUser = props.setLoggedInUser
  return (
    <>
      {loggedInUser === false || loggedInUser === null ? (
        <Jumbotron
          fluid
          style={{
            textAlign: "center",
            marginBottom: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container style={{ width: "100%", margin: "0", padding: "0" }}>
            <img
              style={{ minHeight: "40vh", width: "70%", maxHeight: "60vh" }}
              alt="placeholder"
              src={logo}
              href=""
            />
            <h1>NEW HOMES | RENOVATIONS | DECKS | BATHROOMS</h1>
          </Container>
        </Jumbotron>
      ) : (
        <JobsPage
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
        />
      )}
    </>
  );     
}

export default HomePage
