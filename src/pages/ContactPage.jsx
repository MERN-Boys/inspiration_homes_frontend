import Jumbotron from "react-bootstrap/jumbotron";
import Button from "react-bootstrap/button";


// if user not logged in
// function ContactPage() {
//   return (
    
//     <Jumbotron
//       fluid
//       style={{
//         "height": "86vh",
//         "textAlign": "center",
//         "marginBottom": "0",
//         "display": "flex",
//         "flexDirection": "column",
//         "justifyContent": "center",
//         "alignItems": "center",
//       }}
//     >
//       <h1>Contact Inspiration Homes!</h1>
//       <p>
//         Create an account to start a project, or contact us via the link below.
//       </p>
//       <p>
//         <Button variant="primary">Email Us</Button>
//       </p>
//     </Jumbotron>
//   );
// }


// if user logged in
function ContactPage() {
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
      >
        <div style={{ width: "30%" }}>
          <p>
            Project Name:<input type="string"></input>
          </p>
          <p>
            Project Details:<input type="text"></input>
          </p>
        </div>
        <div style={{ width: "30%" }}>images</div>
      </form>
    </Jumbotron>
  );
}


export default ContactPage;
