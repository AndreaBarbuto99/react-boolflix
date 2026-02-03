import { useState, useEffect } from "react";
import FilmCard from "./FilmCard";
import { useFilm } from "../contexts/FilmProvider";
import SerieCard from "./SerieCard";




export default function CardList() {

    const { filteredFilms, filteredSeries } = useFilm();

    return (
        <>
            <div className="row justify-content-center gap-3">
                {filteredFilms.map(film => (
                    <FilmCard
                        key={film.id}
                        film={film} />
                ))}

                {filteredSeries.map(serie => (
                    <SerieCard
                        key={serie.id}
                        serie={serie} />
                ))}
            </div>
        </>
    )

}