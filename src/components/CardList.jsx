import { useState, useEffect } from "react";
import FilmCard from "./FilmCard";
import { useFilm } from "../contexts/FilmProvider";




export default function CardList() {

    const films = useFilm();

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