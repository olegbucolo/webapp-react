import {useParams} from 'react-router-dom';

export default function FilmDetails({ films }) {
    const {id} = useParams();

    const film = films.find(f => f.id === Number(id))
    if(!film) return <p>film not found</p>
    
    return (
        <main>
            <div>
                <h1>{film.title}</h1>
                <p>{film.abstract}</p>
                <p>{film.genre}</p>
            </div>
        </main>
    )
}