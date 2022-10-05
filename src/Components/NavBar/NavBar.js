import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget.js';
import '../CartWidget/CartWidget.css'

const NavBar = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Tienda de Productos</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#productos">Productos</Nav.Link>
                        <Nav.Link href="#accesorios">Accesorios</Nav.Link>
                        <Nav.Link href="#informacion">Información</Nav.Link>
                        <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                    </Nav>
                    <CartWidget/>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;