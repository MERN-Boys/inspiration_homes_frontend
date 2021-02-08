import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import JobsPage from "./JobsPage.jsx"
import logo from "../images/logo.png"


function HomePage(props) {
  const loggedInUser = props.loggedInUser
  const setLoggedInUser = props.setLoggedInUser
  const urlDomain = props.urlDomain;
  console.log(loggedInUser)
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
              style={{ minHeight: "40vh", width: "70%", maxHeight: "60vh" , border: "5px solid #343a40", borderRadius: "10px", opacity: "80%"}}
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
          urlDomain={urlDomain}
        />
      )}
    </>
  );     
}

export default HomePage
