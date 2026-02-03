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
    const [popularCounter, setPopularCounter] = useState(1);
    const [seriesMoviesCounter, setSeriesMoviesCounter] = useState(1);
    const [maxPopularPages, setMaxPopularPages] = useState();
    const [maxFilmPages, setMaxFilmPages] = useState();


    useEffect(() => {
        axios.get(`${thirdEndpoint}&page=${popularCounter}`)
            .then((res) => {
                setFilms(res.data.results)
                setMaxPopularPages(res.data.total_pages)
            })
            .catch((err) => console.error("Non è stato possibile eseguire la richiesta", err))
    }, [popularCounter])


    useEffect(() => {
        if (search === "") {
            setFilteredFilms([])
            setFilteredSeries([])
            return;
        }

        const myUrlFilms = `${endpoint}&query=${search}&page=${seriesMoviesCounter}`;
        axios.get(myUrlFilms)
            .then((res) => {
                setFilteredFilms(res.data.results)
                setMaxFilmPages(res.data.total_pages)
            })
            .catch(console.error);

        const myUrlSeries = `${secondEndpoint}&query=${search}&page=${seriesMoviesCounter}`;
        axios.get(myUrlSeries)
            .then((res) => setFilteredSeries(res.data.results))
            .catch(console.error);
    }, [search, seriesMoviesCounter])

    useEffect(() => {
        if (search === "") {
            setPopularCounter(1)
        }
        else {
            setSeriesMoviesCounter(1)
        }

    }, [search])

    return (
        <FilmContext.Provider value={{ films, maxFilmPages, maxPopularPages, setSearch, popularCounter, seriesMoviesCounter, setPopularCounter, setSeriesMoviesCounter, search, filteredFilms, filteredSeries }}>
            {children}
        </FilmContext.Provider>
    )
}

export function useFilm() {
    const context = useContext(FilmContext)
    return context
}