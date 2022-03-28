import { NavLink } from "react-router-dom"
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap"
export const Navibar = ()=>{
    return(
        
         <div>
            <Navbar bg="dark" variant="dark" expand="lg">
               <Container>
                  <Navbar.Brand href="/">RaktKosh</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="me-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                     <Nav.Link href="/about">About</Nav.Link>
                     <NavDropdown title="Looking for Blood" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/bloodAvailablitity">Blood Availability</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/bloodBankAvailablitity">Nearby Blood Bank</NavDropdown.Item>
                        
                     </NavDropdown>
                     <NavDropdown title="Want to Donate" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Blood Donation Camps</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Appointment for Blood Bank</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Donor Login</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">About Blood Donation</NavDropdown.Item>
                     </NavDropdown>

                     <NavDropdown title="Blood Bank Login" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Raktkosh Login</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Add Your Bloodbank</NavDropdown.Item>
                        
                     </NavDropdown>
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         {/* {  <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
         </nav> } */}
        
         </div>
    
    )
}