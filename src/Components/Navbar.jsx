import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardV2 from '../Pages/DashboardV2.0';
import { Link, Routes, Route } from 'react-router-dom';
import About from '../Pages/About';

export default function newNavbar() {

    return(
        <>
            <Navbar className='navbar' sticky='top'>
                <Container>
                    <Navbar.Brand className='navbar-text' as={Link} to='/'>
                    <img src='https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/256/Basketball-Flat-icon.png' />
                        Settle the Score
                    </Navbar.Brand> 
                    <Navbar.Brand as={Link} to='/about' className='about'>
                        About
                    </Navbar.Brand>                              
                </Container>
            </Navbar>
            <div>
                <Routes>
                    <Route path='/' element={<DashboardV2 />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </div>
        </>
    )
}
    