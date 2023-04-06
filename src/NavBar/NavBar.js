import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavBar = () => {
    const NavItems = [
        {
            id:"1",
            name:"Home"
        },
        {
            id:"2",
            name:"About Me"
        },
        {
            id:"3",
            name:"Portfolio"
        },
        {
            id:"4",
            name:"Contact Me"
        }
    ]
    return(
        <>
            <Navbar  expand="lg" className='hograrth_NavBarMain'>
                <Container className='hogarth_nav_container'>
                    <Navbar.Brand className='hogarth_nav_brand' href="#home">Black Sea</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='hogarth_Nav_Toggle'/>
                    <Navbar.Collapse id="basic-navbar-nav" className='hogarth_Nav_Collapse'>
                    <Nav className="me-auto hogarth_Nav2_NavItems">
                        {NavItems.map((navItems) => (
                            <Nav.Link href="#home" key={navItems.id} className="hogarth_Nav_Items breadcrumb-item">{navItems.name}</Nav.Link>
                        ))}
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;