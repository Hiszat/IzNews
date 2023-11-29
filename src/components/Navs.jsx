import React from "react";
import {Container, Nav, Navbar, Form, Button} from 'react-bootstrap';


const Navs = ({ fetchNews, initialUrl, navBarSearch, setSearchTerm, performSearch }) => {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Iz News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => fetchNews(initialUrl)}>
                Home
              </Nav.Link>
              <Nav.Link href="#link" onClick={() => navBarSearch('anime')}>
                Anime
              </Nav.Link>
              <Nav.Link href="#link" onClick={() => navBarSearch('sports')}>
                Sports
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="outline-success" onClick={performSearch}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navs;