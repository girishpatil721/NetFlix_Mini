import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { search } from './Navbar_action';
import { Link } from 'react-router-dom';

// import netflix_logo from '../resources/net.png';

function NavScrollExample() {
  const dispatch = useDispatch();

  function inputsearch(e){
    dispatch(search(e.target.value))
  }
  return (
    <Navbar  bg="dark" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"> <img src="https://cdn-icons-png.flaticon.com/512/5977/5977590.png" height="80px" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Player">Player</Nav.Link>
            <NavDropdown title="contact" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">email</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/about" >
              About
            </Link>
          </Nav>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search Movie"
              className="me-2"
              aria-label="Search"
              onChange={inputsearch}
            />
            <Button variant="outline-success" className='bg-white'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;