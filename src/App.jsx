import { useState, useEffect } from 'react'
import axios from 'axios';
import {Container, Nav, Navbar, Form, Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);

  const fetchNews = (url) => {
    axios
      .get(url)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const initialUrl =
      'https://newsapi.org/v2/top-headlines?country=us' +
      '&pageSize=9' +
      '&sortBy=popularity' +
      '&apiKey=72e148dd9cfb4074b7682ea66ef415d4';

  useEffect(() => {
    fetchNews(initialUrl);
  }, []);

  const performSearch = () => {
    const url = `https://newsapi.org/v2/everything?q=${searchTerm}&pageSize=9&apiKey=72e148dd9cfb4074b7682ea66ef415d4`;
    fetchNews(url);
  };

  const navBarSearch = (params) => {
    const url = `https://newsapi.org/v2/everything?q=${params}&pageSize=9&apiKey=72e148dd9cfb4074b7682ea66ef415d4`;
    fetchNews(url);
  };

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Iz News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => fetchNews(initialUrl)}>Home</Nav.Link>
            <Nav.Link href="#link" onClick={() => navBarSearch('anime')}>Anime</Nav.Link>
            <Nav.Link href="#link" onClick={() => navBarSearch('sports')}>Sports</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-success" onClick={performSearch}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
        <h1 className="mt-3">Welcome to headline</h1>
        <List articles={articles} />
    </Container>
    </>
  )
}

export default App
