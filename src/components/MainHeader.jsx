import { useFilm } from "../contexts/FilmProvider"



export default function MainHeader() {
    const { setSearch } = useFilm();

    return (
        <header className="my-header mb-5 d-flex justify-content-between align-items-center">
            <h2 className="header-title text-danger ms-3 mb-0 text-center">BOOLFIX</h2>
            <input className="search-bar me-3 input-group-text ps-1"
                type="text"
                placeholder="Inserisci film o serie"
                onChange={e => { setSearch(e.target.value) }} />
        </header>
    )

}