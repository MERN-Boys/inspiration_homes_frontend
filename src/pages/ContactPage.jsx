import Jumbotron from "react-bootstrap/jumbotron";
import Button from "react-bootstrap/button";


// if user !logged in
function ContactPage() {
  return (
    
    <Jumbotron
      fluid
      style={{
        "height": "86vh",
        "text-align": "center",
        "margin-bottom": "0",
        "display": "flex",
        "flex-direction": "column",
        "justify-content": "center",
        "align-items": "center",
      }}
    >
      <h1>Contact Inspiration Homes!</h1>
      <p>
        Create an account to start a project, or contact us via the link below.
      </p>
      <p>
        <Button variant="primary">Email Us</Button>
      </p>
    </Jumbotron>
  );
}

export default ContactPage;
