import React from "react";
import logo from "./logo.svg";
import MetaMaskLogo from "./MetaMask_Fox.svg";
import "./App.scss";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Image,
} from "react-bootstrap";

function App() {
  const singleImageStyle = {
    height: "225px",
    width: "100%",
    display: "block",
  };

  return (
    <div className="App">
      <Container fluid g-0>
        <Navbar g-5 bg="primary" expand="lg">
          <Container fluid g-0>
            <Navbar.Brand href="#home">
              <Image className="navbar-logo" src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#home">My Books</Nav.Link>
                <Nav.Link href="#home">Marketplace</Nav.Link>

                <NavDropdown title="Explore" id="basic-nav-dropdown">
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
                src={MetaMaskLogo}
                alt="MetaMask Logo"
              />
            </span>
          </Container>
        </Navbar>
        <Container className="p-5 mt-4 bg-light mb-4">
          <h1>Text</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quis
            reiciendis voluptatum maiores vitae autem eos labore, accusamus
            perferendis. Ipsa maiores alias sapiente? Autem corporis porro,
            neque quia delectus tempore.
          </p>
          <Button>Text</Button>
        </Container>
      </Container>
    </div>
  );
}

export default App;
