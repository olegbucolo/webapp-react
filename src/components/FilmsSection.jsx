import { Link } from "react-router-dom";

export default function FilmsSection({ films }) {
    return (
        <main>
            <ul>
                {films.map(film => (
                    <li key={film.id}>
                        <h1>{film.title}</h1>
                        <p>{film.abstract}</p>
                        <Link to={`movies/${film.id}`}>Watch Film Details</Link>
                    </li>

                ))
                }
            </ul>
        </main>
    )
}