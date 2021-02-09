import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import JobsPage from "./JobsPage.jsx"
import logo from "../images/logofinal.png"


function HomePage(props) {
  const loggedInUser = props.loggedInUser
  const setLoggedInUser = props.setLoggedInUser
  const urlDomain = props.urlDomain;

  // console.log(loggedInUser)
  
  return (
    <>
      {loggedInUser === false || loggedInUser === null ? (
        <Jumbotron
          fluid
          className="homePageContainer"
          style={{
            textAlign: "center",
            backgroundColor: "transparent" ,
            marginBottom: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container style={{ width: "100%", margin: "0", padding: "0" }}>
            <img
              style={{ width: "100%", objectFit: "fill" , border: "5px solid #343a40", borderRadius: "10px", opacity: "95%"}}
              alt="placeholder"
              src={logo}
              href=""
            />
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
