import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function ReviewsComp({fetchFilmDetails}) {

    const { id } = useParams();
    const reviewEndpoint = `http://localhost:3000/movies/${id}/reviews`
    
    const emptyForm = {
        name: "",
        vote: "",
        text: "",

    }

    const [formData, setformData] = useState(emptyForm)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        axios.post(reviewEndpoint, formData)
            .then(res => {
                fetchFilmDetails()
                setformData(emptyForm)
                console.log('response arrivata')
            })
            .catch(err => {
                console.log('errorre', err.message)

            })
    }

    const updateForm = (e) => {
        console.log('updating our form')
        setformData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div>
            <div>Leave a review!!!</div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label >Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={updateForm}
                        name="name"
                    />
                </div>
                <div>
                    <label >Review</label>
                    <input
                        type="text"
                        value={formData.text}
                        onChange={updateForm}
                        name="text"
                    />
                </div>
                <div>
                    <label >Voto</label>
                    <input
                        type="number"
                        value={formData.vote}
                        onChange={updateForm}
                        name="vote"
                    />
                </div>
                <div>
                    <input
                        type="submit"
                    />
                </div>
               
            </form>
        </div>
    )
}