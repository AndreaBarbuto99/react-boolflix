import { useState, useEffect } from "react";
import FilmCard from "./FilmCard";
import { useFilm } from "../contexts/FilmProvider";
import SerieCard from "./SerieCard";




export default function CardList() {

    const { filteredFilms, filteredSeries } = useFilm();

    return (
        <>
            <div className="container row m-auto ">
                {filteredFilms.map(film => (
                    <FilmCard
                        key={film.id}
                        film={film} />
                ))}
            </div>
            <div className="container row m-auto">
                {filteredSeries.map(serie => (
                    <SerieCard
                        key={serie.id}
                        serie={serie} />
                ))}
            </div>
        </>
    )

}