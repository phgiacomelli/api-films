import { Container, MenuBar, ToggleChk, ToggleDarkLight, ToggleBall, MovieList, Movie } from "./styles"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
function Home() {

    const [movies, setMovies] = useState([])
    const img_path = 'https://image.tmdb.org/t/p/w500'
    useEffect(() => {
        // consumindo a API
        console.log(process.env)
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=36a5cf369299f47bcf5680019dc6275d&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => { setMovies(data.results) })
    }, [])

    return (
        <Container>
            <MenuBar>
                <ToggleChk type="checkbox"/>
                <ToggleDarkLight>
                    <FontAwesomeIcon icon={faMoon} color="#f1c40f" />
                    <FontAwesomeIcon icon={faSun} color="#f39c12" />
                    <ToggleBall></ToggleBall>
                </ToggleDarkLight>
            </MenuBar>
            <h1>Filmes</h1>
            <MovieList>
                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}><img src={`${img_path}${movie.poster_path}`} alt={movie.title} /></Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>

        </Container>

    );
};

export default Home;