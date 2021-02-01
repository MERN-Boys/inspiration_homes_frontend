import Jumbotron from "react-bootstrap/jumbotron";
import Button from "react-bootstrap/button";
import {useState} from "react"

function ContactPage({loggedInUser}) {

  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {};
  
if (loggedInUser) {

  return (
    <Jumbotron
      fluid
      style={{
        height: "86vh",
        textAlign: "center",
        marginBottom: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Contact us with your idea</h1>
      <h1> and take your project to the next stage</h1>

      <form
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={(event) => handleSubmit(event, formData)}
      >
        <div style={{ width: "30%" }}>
          <div>
            <label htmlFor="jobTitle">Job Title</label>
            <input name="jobTitle" onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="jobAddress">Job Address</label>
            <input name="jobAddress" onChange={handleChange} />
          </div>
        </div>
        <div style={{ width: "30%" }}>
          <div>
            <label htmlFor="designDocs.comment">Comments</label>
            <input name="designDocs.comment" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="designDocs.description">Comments</label>
            <input name="designDocs.description" onChange={handleChange} />
          </div>
        </div>
      </form>
    </Jumbotron>
  );
}
else {
  return (
  <Jumbotron
      fluid
      style={{
        "height": "86vh",
        "textAlign": "center",
        "marginBottom": "0",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
      }}
    >
      <h1>Contact Inspiration Homes!</h1>
      <p>
        Create an account to start a project, or contact us via the link below.
      </p>
      <p>
        <Button variant="primary">Email Us</Button>
      </p>
    </Jumbotron>)
}
}

export default ContactPage;
