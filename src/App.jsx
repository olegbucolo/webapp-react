import './App.css'
import { useState, useEffect } from 'react';
import FilmsSection from './components/FilmsSection'
import FilmsDetails from './components/FilmDetails';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import HeaderMain from './components/HeaderMain'
import HomePage from './pages/HomePage';

const filmsIndex = 'http://localhost:3000/movies'

function App() {

  const [films, setFilms] = useState([])

  useEffect(() => {
    axios.get(filmsIndex)
      .then(res => {
        setFilms(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <HeaderMain />

      <Routes>
        <Route index element={<HomePage films={films} />} />
        <Route path="movies/:id" element={<FilmsDetails/>} />

      </Routes>
    </>
  )
}

export default App
