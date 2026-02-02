


export default function Stars({ vote }) {
    let myVote = Math.round(vote / 2);
    const myArray = [0, 1, 2, 3, 4];
    return (

        myArray.map((_, i) => (
            i < myVote ? <i key={i} className="fas fa-star text-warning" />
                : <i key={i} className="far fa-star text-white" />
        ))

    )

}