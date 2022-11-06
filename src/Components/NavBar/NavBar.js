import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand as={Link} to='/'>
            Drink Party
            </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>
                Home
            </Nav.Link>
            <Nav.Link as={Link} to='/category/whisky'>Whiskis</Nav.Link>
            <Nav.Link as={Link} to='/category/cerveza'>Cervezas</Nav.Link>
            <Nav.Link as={Link} to='/category/vino'>Vinos</Nav.Link>
            <Nav.Link as={Link} to='/category/licor'>Licores</Nav.Link>
            </Nav>
            <CartWidget />
        </Container>
        </Navbar>
    )
}

export default NavBar;