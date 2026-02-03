import FilmCard from "./FilmCard";
import SerieCard from "./SerieCard";
import { useFilm } from "../contexts/FilmProvider";


export default function CardList() {
    const { films, seriesMoviesCounter, popularCounter, setPopularCounter, setSeriesMoviesCounter, filteredFilms, filteredSeries, search } = useFilm();
    const maxPopularPages = films.total_pages;
    const maxFilmsPages = filteredFilms.total_pages;



    return (
        <>
            <div className="buttons d-flex justify-content-evenly mb-3">
                <button className="btn btn-dark" onClick={() => search === "" ? setPopularCounter(popularCounter - 1) : setSeriesMoviesCounter(seriesMoviesCounter - 1)}
                    disabled={search === "" ? popularCounter === 1 : seriesMoviesCounter === 1}>Previous</button>
                <button className="btn btn-dark" onClick={() => search === "" ? setPopularCounter(popularCounter + 1) : setSeriesMoviesCounter(seriesMoviesCounter + 1)}
                    disabled={search === "" ? popularCounter === maxPopularPages : seriesMoviesCounter === maxFilmsPages}>Next</button>
            </div>
            <div className="row justify-content-center gap-3">
                {search === "" ? (
                    films.map(film => (
                        <FilmCard key={film.id} film={film} />
                    ))
                ) : (
                    <>
                        {filteredFilms.map(film => (
                            <FilmCard key={film.id} film={film} />
                        ))}
                        {filteredSeries.map(serie => (
                            <SerieCard key={serie.id} serie={serie} />
                        ))}
                    </>
                )}
            </div>
            <div className="buttons d-flex justify-content-around">
                <button className="btn btn-dark" onClick={() => search === "" ? setPopularCounter(popularCounter - 1) : setSeriesMoviesCounter(seriesMoviesCounter - 1)}
                    disabled={search === "" ? popularCounter === 1 : seriesMoviesCounter === 1}>Previous</button>
                <button className="btn btn-dark" onClick={() => search === "" ? setPopularCounter(popularCounter + 1) : setSeriesMoviesCounter(seriesMoviesCounter + 1)}
                    disabled={search === "" ? popularCounter === maxPopularPages : seriesMoviesCounter === maxFilmsPages}>Next</button>
            </div>
        </>
    );
}
