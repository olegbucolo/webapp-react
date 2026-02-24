import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const filmsShow = 'http://localhost:3000/movies/'

export default function FilmDetails() {
    const [filmDetails, setFilmDetails] = useState({ reviews: [] })
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

    // const film = films.find(f => f.id === Number(id))
    if(!filmDetails) return <p>film not found</p>
    
    return (
        <main>
            <div>
                <h1>MOVIE DETAILS</h1>
                <img src={filmDetails.image} alt="" />
                <h2>{filmDetails.title}</h2>
                <p>{filmDetails.genre}</p>
                <p>{filmDetails.release_year}</p>
                <p>{filmDetails.abstract}</p>
            </div>
            <div>
                <h1>REVIEWS</h1>
                {filmDetails.reviews.map(review => (
                    <div key={review.id}>
                        <h2>{review.name}</h2>
                        <p>{review.vote}</p>
                        <p>{review.text}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}