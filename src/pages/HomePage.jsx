import Jumbotron from "react-bootstrap/jumbotron";
import Container from "react-bootstrap/container";

function HomePage() {
    return (
      <Jumbotron
        fluid
        style={{ height: "86vh", "text-align": "center", "margin-bottom": "0" }}
        id="homebody"
      >
        <Container>
          <h1 className="homeTitle">Inspiration Homes</h1>
          <p className="homeText">SHAKE n BAKE BABY</p>
        </Container>
      </Jumbotron>
    );
}

export default HomePage
