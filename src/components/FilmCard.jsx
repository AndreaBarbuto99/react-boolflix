import LanguageFlag from "./LanguageFlag";
import Stars from "./Stars";



const imgUrl = "https://image.tmdb.org/t/p/w92"


export default function FilmCard({ film }) {

    const { title, original_title, poster_path, overview, original_language, vote_average } = film;

    return (
        <>
            <div className="actor-card col-3 p-0 bg-dark rounded" >
                <h3 className="text-white text-center">Titolo: {title}</h3>
                <h3 className="text-white text-center">Titolo originale : {original_title}</h3>
                <figure className="text-center">
                    <img src={`${imgUrl}${poster_path}`} alt={original_title} onError={(e) => e.target.src = "https://placehold.co/220x300"} />
                </figure>
                <figcaption className="actor-info">
                    <LanguageFlag language={original_language} />
                    <p className="text-white">{overview ? overview : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
                    <p><Stars vote={vote_average} /></p>
                </figcaption>

            </div>
        </>
    )
}