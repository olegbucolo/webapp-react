import './App.css'
import { useState, useEffect } from 'react';
import FilmsSection from './components/FilmsSection'
import FilmsDetails from './components/FilmDetails';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

const filmsIndex = ''

const filmsRawData = [
   {
    id:  1,
    title:  "Inception",
    director:  "Christopher Nolan",
    genre:  "Science Fiction",
    release_year:  2010,
    abstract:  "A skilled thief is given a chance at redemption if he can successfully perform inception.",
    image:  "inception.jpg",
    created_at:  "2024-11-29T10:40:13.000Z",
    updated_at:  "2025-05-22T10:55:27.000Z"
  },
  {
    id:  2,
    title:  "The Godfather",
    director:  "Francis Ford Coppola",
    genre:  "Crime",
    release_year:  1972,
    abstract:  "The story of a powerful Italian-American crime family and their struggles.",
    image:  "interstellar.jpg",
    created_at:  "2024-11-29T10:40:13.000Z",
    updated_at:  "2025-05-22T10:55:27.000Z"
  }]

function App() {

  const [films, setFilms] = useState(filmsRawData)


  // axios per api pronto
  // useEffect(() => {
  //   axios.get(filmsIndex)
  //     .then(res => {
  //       setFilms(res.data);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <>
    <Routes>
      <Route index element={<FilmsSection films={films}/>}/>
      <Route path="movies/:id" element={<FilmsDetails films={films}/>}/>
    </Routes>
    </>
  )
}

export default App
