import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";


const endpoint = import.meta.env.VITE_API_URL_FILMS
const secondEndpoint = import.meta.env.VITE_API_URL_SERIES
const FilmContext = createContext();

export function FilmProvider({ children }) {

    const [films, setFilms] = useState([]);
    // variabili di stato per ricerca film
    const [search, setSearch] = useState("");
    const [filteredFilms, setFilteredFilms] = useState([]);
    const [filteredSeries, setFilteredSeries] = useState([]);


    useEffect(() => {

        const myUrlFilms = `${endpoint}&query=${search}`;

        axios.get(myUrlFilms)
            .then((res) => {
                setFilteredFilms(res.data.results)
            })
            .catch((err) => console.error("Non è stato possibile eseguire la richiesta", err))

    }, [search])

    useEffect(() => {
        const myUrlSeries = `${secondEndpoint}&query=${search}`

        axios.get(myUrlSeries)
            .then((res) => {
                setFilteredSeries(res.data.results)
            })
            .catch((err) => console.error("Non è stato possibile eseguire la richiesta", err))
    }, [search])

    // useEffect(() => {
    //     const newFilteredFilms = films.filter((film) => {
    //         return film.title.toLowerCase().includes(search.toLowerCase())
    //     })
    //     setFilteredFilms(newFilteredFilms)
    //     axios.get(`${endpoint}&query=${search}`)
    // }, [search, films])

    return (
        <FilmContext.Provider value={{ films, setSearch, filteredFilms, filteredSeries }}>
            {children}
        </FilmContext.Provider>
    )
}

export function useFilm() {
    const context = useContext(FilmContext)
    return context
}