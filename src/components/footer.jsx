import { Navbar, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";


export default function Footer() {
  return (
    <Container
      style={{ height: "7vh", "min-height": "55px", "min-width": "100vw" }}
    >
      <Navbar variant="light" bg="light" style={{ "align-items": "center" }}>
        <Navbar.Brand href="#">inspiration homes</Navbar.Brand>
        <Button style={{ float: "right" }}>Login</Button>
        <Button style={{ float: "right" }}>Sign Up</Button>
      </Navbar>
    </Container>
  );
}
