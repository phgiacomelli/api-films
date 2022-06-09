import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Container } from "./styles"
function Details() {

    const { id } = useParams()

    const [movie, setMovie] = useState({})
    const img_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=36a5cf369299f47bcf5680019dc6275d&language=en-US`)
            .then(response => response.json())
            .then(data => {
                const { title, overview, poster_path, release_date } = data
                const movie = {
                    id,
                    title: title,
                    sinopse: overview,
                    image: `${img_path}${poster_path}`,
                    releaseDate: release_date
                }
                setMovie(movie)
            })
    }, [id]);

    return (
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse} />
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className="release-date">Data de Lançamento: {movie.releaseDate}</span>
                    <Link to="/">
                        <button>Voltar</button>
                    </Link>

                </div>
            </div>
        </Container>
    )
}

export default Details