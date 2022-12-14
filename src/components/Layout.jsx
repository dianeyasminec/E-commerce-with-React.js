import {Navbar,Nav,Container,Form,Button} from 'react-bootstrap'
import {Link, Outlet} from 'react-router-dom'



export default function Layout() {
  return (
    <>
      <Navbar sticky="top" expand="xl" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand > Anitta's Shop</Navbar.Brand>
         
          <Nav className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link as={Link} to ='/'>Home</Nav.Link>
            <Nav.Link  as={Link} to ='store'>Store</Nav.Link>
            <Nav.Link as={Link} to ='teams'>Teams</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end mx-5">
                <Nav>
          <Navbar.Text>
            <p className="text-light">
          Everything has beauty, but not everyone sees it
          </p>
          </Navbar.Text>
          </Nav>
          <Nav>
          <Form className="d-flex mx-5  ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
            />
            <Button variant="outline-secondary ">Search</Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
         
        </Container>
      </Navbar>
      <Outlet/>
      
    </>
  



  )};
