import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from './components/Navs';
import NewsContainer from "./components/NewsContainer";

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
    <Navs
        fetchNews={fetchNews}
        initialUrl={initialUrl}
        navBarSearch={navBarSearch}
        setSearchTerm={setSearchTerm}
        performSearch={performSearch}
      />
    <NewsContainer articles={articles} />
    </>
  )
}

export default App
