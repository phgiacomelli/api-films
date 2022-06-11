import { Container, MovieList, Movie } from "./styles"
import { genres } from '../Genres';
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import CustomizedSwitches from "../Switch/switch";


function Home() {
    



    const [movies, setMovies] = useState([])
    const imgPath = 'https://image.tmdb.org/t/p/w500'

    // const url = `https://api.themoviedb.org/3/${test}api_key=36a5cf369299f47bcf5680019dc6275d`; 
    // const popular = `movie/popular?`
    // const genero = `discover/movie?with_genres=${genre.id}&language=pt-BR&`

    function changeGenre() {
        var select = document.getElementById("genres");
        let id = select.options[select.selectedIndex].value;
        console.log(id)
        return id;
    }



    // useEffect(() => {
    //         fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&language=pt-BR&api_key=36a5cf369299f47bcf5680019dc6275d`)
    //             .then(response => response.json())
    //             .then(data => { setMovies(data.results) })
    //     }, [])

    useEffect(() => {
        // consumindo a API
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=36a5cf369299f47bcf5680019dc6275d&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => { setMovies(data.results) })
    }, [])


    return (
        <Container>
            <h1>TOP 20 Filmes populares</h1>
            <select id="genres"> {genres.map(genre => {
                return (
                    <option value={genre.id}>{genre.name}</option>
                )
            })}
            </select>
            <Link to={`/genero/${changeGenre}`}><button onClick={changeGenre}>Pesquisar</button></Link>
            
            <CustomizedSwitches/>
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
};

export default Home;