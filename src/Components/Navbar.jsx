import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardV2 from '../Pages/DashboardV2.0';
import { Link, Routes, Route } from 'react-router-dom';

export default function newNavbar() {

    return(
        <>
            <Navbar sticky='top' bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Settle the Score</Navbar.Brand>                               
                </Container>
            </Navbar>
            <div>
                <Routes>
                    <Route path='/' element={<DashboardV2 />} />
                </Routes>
            </div>
        </>
    )
}
    