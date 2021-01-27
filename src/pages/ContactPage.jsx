import Jumbotron from "react-bootstrap/jumbotron";
import Button from "react-bootstrap/button";

function ContactPage() {
  return (
    // if user !logged in
    <Jumbotron style={{"padding":"100px"}} >
      <h1>Contact Inspiration Homes!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Email Us</Button>
      </p>
    </Jumbotron>

    // if user logged in
  );
}

export default ContactPage;
