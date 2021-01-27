import { Navbar, Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Container style={{ "height": "7vh", "min-height": "55px", "margin": "0"}}>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#">inspiration homes</Navbar.Brand>
      </Navbar>
    </Container>
  );
}
