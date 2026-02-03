import FilmCard from "./FilmCard";
import SerieCard from "./SerieCard";
import { useFilm } from "../contexts/FilmProvider";


export default function CardList() {
    const { films, filteredFilms, filteredSeries, search } = useFilm();

    return (
        <>
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
        </>
    );
}
