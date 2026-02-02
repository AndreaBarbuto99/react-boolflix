import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";


const endpoint = "https://api.themoviedb.org/3/movie/popular?api_key=3e4278990a3d0cd59ed2fd1d9008426c&language=it"
const FilmContext = createContext();

export function FilmProvider({ children }) {

    const [films, setFilms] = useState([])

    useEffect(() => {
        axios.get(endpoint)
            .then((res) => setFilms(res.data.results))
            .catch((err) => err, console.error("Non è stato possibile eseguire la richiesta"))

    }, [])

    return (
        <FilmContext.Provider value={films}>
            {children}
        </FilmContext.Provider>
    )
}

export function useFilm() {
    const context = useContext(FilmContext)
    return context
}