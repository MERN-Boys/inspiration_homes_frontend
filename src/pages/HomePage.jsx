import Jumbotron from "react-bootstrap/jumbotron";
import Container from "react-bootstrap/container";

function HomePage() {
    return (
      <Jumbotron fluid style={{"height":"86vh", "text-align":"center"}}>
        <Container>
          <h1>Inspiration Homes</h1>
          <p>
            SHAKE n BAKE BABY
          </p>
        </Container>
      </Jumbotron>
    );
}

export default HomePage
