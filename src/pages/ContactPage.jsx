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
      <h1>Contact us with your idea and take your project to the next stage</h1>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={(event) => handleSubmit(event, formData)}
      >
        <section>
          <div>
            <label htmlFor="jobTitle">Job Title</label>
          </div>
          <div>
            <input name="jobTitle" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="jobAddress">Job Address</label>
          </div>
          <div>
            <input name="jobAddress" onChange={handleChange} />
          </div>
        </section>
        <section>
          <div>
            <label>Job Description:</label>
          </div>
          <div>
            <textarea onChange={handleChange} />
          </div>
        </section>
      </form>
    </Jumbotron>
  );
}
else {
  return (
  <Jumbotron
      fluid
      style={{
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
        <Button variant="primary" onClick={() => window.open('mailto:inspirationhomesqld@gmail.com?subject=Project%20Inquiry')}>Email Us</Button>
      </p>
    </Jumbotron>)
}
}

export default ContactPage;
