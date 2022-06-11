import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Container, MovieList, Movie } from "../Home/styles"
export const genres = [
    {
        id: 28,
        name: "Ação"
    }, {
        id: 12,
        name: "Aventura"
    }, {
        id: 16,
        name: "Animação"
    }, {
        id: 35,
        name: "Comédia"
    }, {
        id: 80,
        name: "Crime"
    }, {
        id: 99,
        name: "Documentário"
    }, {
        id: 18,
        name: "Drama"
    }, {
        id: 10751,
        name: "Família"
    }, {
        id: 14,
        name: "Fantasia"
    }, {
        id: 36,
        name: "História"
    }, {
        id: 27,
        name: "Terros"
    }, {
        id: 10402,
        name: "Musical"
    }, {
        id: 9648,
        name: "Mistério"
    }, {
        id: 10749,
        name: "Romance"
    }, {
        id: 878,
        name: "Ficção Científica"
    }, {
        id: 10770,
        name: "Filmes de TV"
    }, {
        id: 53,
        name: "Suspense"
    }, {
        id: 10752,
        name: "Guerra"
    }, {
        id: 37,
        name: "Faroeste"
    }
]
function Genre() {
    const { id } = useParams()
    const [movies, setMovies] = useState([])
    const imgPath = 'https://image.tmdb.org/t/p/w500'

    function changeGenre() {
        var select = document.getElementById("genres");
        let id = select.options[select.selectedIndex].value;
        console.log(id)
    }
    const moviesGenre = movies.map(movie => movie.genre)


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&language=pt-BR&api_key=36a5cf369299f47bcf5680019dc6275d`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results)
            })
    }, [id])

    return (
        <Container>
            <h1>{`TOP 20 Filmes de ${moviesGenre}`}</h1>
            <select id="genres"> {genres.map(genre => {
                return (
                    <option value={genre.id}>{genre.name}</option>
                )
            })}
            </select>
            <Link to={`/genero/${changeGenre}`}><button onClick={changeGenre}>Pesquisar</button></Link>
            <MovieList> {movies.map(movie => {
                return (
                    <Movie key={movie.id}>
                        <Link to={`/details/${movie.id}`}>
                            <img src={`${imgPath}${movie.poster_path}`} alt={movie.title} /> </Link>
                        <span>{movie.title}</span>
                    </Movie>
                )
            })
            } </MovieList>
        </Container >
    );

}
export default Genre