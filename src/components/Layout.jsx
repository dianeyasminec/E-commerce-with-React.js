import {Navbar,Nav,Container,Form,Button} from 'react-bootstrap'
import {Link, Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Navbar sticky="top" expand="xl" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand > Anitta's Shop</Navbar.Brand>
         
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="store">Store</Nav.Link>
              <Nav.Link as={Link} to="teams">Teams</Nav.Link>
            </Nav>
            <Navbar.Text>
            <blockquote className="blockquote text-light">
               <p className="mb-0">
                Beauty is not just skin deep. It starts with how we nourish ourselves, both inside and out
                </p>
            </blockquote>

            </Navbar.Text>
            {/* <Form className="d-flex mx-5 my-2 my-lg-0">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-secondary">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  );
}

