import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function newNavbar() {

    return(
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Leagues</Nav.Link>
                    <Nav.Link href="#features">Games</Nav.Link>
                    <Nav.Link href="#pricing">Log In</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
    