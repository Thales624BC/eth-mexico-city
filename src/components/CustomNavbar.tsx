import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Image,
} from "react-bootstrap";
import logo from "../logo.svg";
import WalletConnectLogo from "../walletconnectlogo-01.svg";
function CustomNavbar() {
  const navDropdownTitle = (<b>Explore</b>);
  return <>
        <Navbar className="bg-secondary" expand="lg">
          <Container fluid g-0>
            <Navbar.Brand href="#home">
              <Image className="navbar-logo" src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home"><b>Home</b></Nav.Link>
                <Nav.Link href="#home"><b>My Books</b></Nav.Link>
                <Nav.Link href="#home"><b>Marketplace</b></Nav.Link>

                <NavDropdown title={navDropdownTitle} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Book Category 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Book Category 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Book Category 3
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Book Category 4
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Contact Us
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <span>
              {" "}
              <img
                className="justify-content-end navbar-logo"
                src={WalletConnectLogo}
                alt="WalletConnect Logo"
              />
            </span>
          </Container>
        </Navbar>
        </>;
}
export default CustomNavbar;