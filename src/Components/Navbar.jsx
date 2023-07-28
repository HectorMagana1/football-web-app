import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Dashboard from '../Pages/Dashboard';
import DashboardV2 from '../Pages/DashboardV2.0';
import { Link, Routes, Route } from 'react-router-dom';
import Leagues from '../Pages/Leagues';
import Games from '../Pages/Games';
import Login from './Login';

export default function newNavbar() {

    return(
        <>
            <Navbar sticky='top' bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Settle the Score</Navbar.Brand>                
                    <Nav className="me-auto">
                            <Nav.Link as={Link} to='/leagues'>Leagues</Nav.Link>
                            <Nav.Link as={Link} to='/games'>Games</Nav.Link>
                            <Nav.Link as={Link} to='/log-in'>Log In</Nav.Link>
                    </Nav>                
                </Container>
            </Navbar>
            <div>
                <Routes>
                    <Route path='/' element={<DashboardV2 />} />
                    <Route path='/leagues' element={<Leagues />} />
                    <Route path='/games' element={<Games />} />
                    <Route path='/log-in' element={<Login />} />
                </Routes>
            </div>
        </>
    )
}
    