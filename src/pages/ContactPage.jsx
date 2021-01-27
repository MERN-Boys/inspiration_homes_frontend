import Jumbotron from "react-bootstrap/jumbotron";
import Button from "react-bootstrap/button";

function ContactPage() {
  return (
    // if user !logged in
    <Jumbotron fluid style={{"padding":"100px", "text-align": "center", "height":"86vh", "margin-bottom":"0"}} >
      <h1>Contact Inspiration Homes!</h1>
      <p>
        Create an account to start a project, or contact us via the link below.
      </p>
      <p>
        <Button variant="primary">Email Us</Button>
      </p>
    </Jumbotron>

    // if user logged in
  );
}

export default ContactPage;
