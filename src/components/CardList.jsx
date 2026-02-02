import { useState, useEffect } from "react";
import axios from "axios";
import FilmCard from "./FilmCard";

const endpoint = "https://api.themoviedb.org/3/movie/popular?api_key=3e4278990a3d0cd59ed2fd1d9008426c&language=it"



export default function CardList() {

    const [films, setFilms] = useState([])

    useEffect(() => {
        axios.get(endpoint)
            .then((res) => setFilms(res.data.results))
            .catch((err) => err, console.error("Non è stato possibile eseguire la richiesta"))

    }, [])

    return (
        <div className="container">
            {films.map(film => (
                <FilmCard
                    key={film.id}
                    film={film} />
            ))}
        </div>
    )

}