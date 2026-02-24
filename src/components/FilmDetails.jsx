import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const filmsShow = 'http://localhost:3000/movies/'

export default function FilmDetails({ films }) {
    const [filmDetails, setFilmDetails] = useState([])
    const {id} = useParams();

    useEffect(() => {
        axios.get(`${filmsShow}${id}`)
        .then((res) => {
            setFilmDetails(res.data)
        })
        .catch((err) => {
            console.log("error", err.message )
        })
    }, [])

    const film = films.find(f => f.id === Number(id))
    if(!film) return <p>film not found</p>
    
    return (
        <main>
            <div>
                <img src={film.image} alt="" />
                <h1>{film.title}</h1>
                <p>{film.genre}</p>
                <p>{film.release_year}</p>
                <p>{film.abstract}</p>
                <p>{film.abstract}</p>
            </div>
        </main>
    )
}