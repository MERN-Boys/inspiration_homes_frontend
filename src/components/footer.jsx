import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";


export default function Footer() {
  return (
    <Navbar
      variant="light"
      bg="dark"
      style={{
        "alignItems": "center",
        "height": "7vh",
        "minHeight": "55px",
        "minWidth": "100",
        "display": "flex",
        "position": "fixed",
        "left": "0",
        "bottom": "0",
        "width": "100%",
        "height": "56px"
      }}
    >
      <div style={{ "width": "50vw", "display":"flex", "alignItems":"center" }}>
        <Navbar.Brand style={{"marginLeft":"3vw"}} href="#">inspiration homes</Navbar.Brand>
      </div>
      <div style={{ "width": "50vw" }}>
        <Button style={{ "float": "right", "marginRight": "3vw" }}>Login</Button>
        <Button style={{ "float": "right", "marginRight": "5px" }}>
          Sign Up
        </Button>
      </div>
    </Navbar>
  );
}
