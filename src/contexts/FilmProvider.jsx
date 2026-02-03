import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";


const endpoint = import.meta.env.VITE_API_URL_FILMS
const secondEndpoint = import.meta.env.VITE_API_URL_SERIES
const thirdEndpoint = import.meta.env.VITE_API_URL_POPULAR
const FilmContext = createContext();

export function FilmProvider({ children }) {

    const [films, setFilms] = useState([]);
    // variabili di stato per ricerca film
    const [search, setSearch] = useState("");
    const [filteredFilms, setFilteredFilms] = useState([]);
    const [filteredSeries, setFilteredSeries] = useState([]);


    useEffect(() => {
        axios.get(thirdEndpoint)
            .then((res) => {
                setFilms(res.data.results)
            })
            .catch((err) => console.error("Non è stato possibile eseguire la richiesta", err))
    }, [])


    useEffect(() => {
        if (search === "") {
            setFilteredFilms([])
            setFilteredSeries([])
            return;
        }

        const myUrlFilms = `${endpoint}&query=${search}`;
        axios.get(myUrlFilms)
            .then((res) => setFilteredFilms(res.data.results))
            .catch(console.error);

        const myUrlSeries = `${secondEndpoint}&query=${search}`;
        axios.get(myUrlSeries)
            .then((res) => setFilteredSeries(res.data.results))
            .catch(console.error);
    }, [search])

    return (
        <FilmContext.Provider value={{ films, setSearch, search, filteredFilms, filteredSeries }}>
            {children}
        </FilmContext.Provider>
    )
}

export function useFilm() {
    const context = useContext(FilmContext)
    return context
}