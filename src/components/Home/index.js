import { Container, TopBar, MovieList, Movie } from "./styles"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ThemeProvider } from 'styled-components'
import MaterialUiSwitch from "../Switch"
import { lightTheme } from "../../styles/themes/light"
import { darkTheme } from "../../styles/themes/dark"
import GlobalStyles from "../../styles/globalStyles"
import Footer from "../Footer"

function Home() {
    const [movies, setMovies] = useState([])
    const imgPath = 'https://image.tmdb.org/t/p/w500'

    const [theme, setTheme] = useState(() => {
        const storageValue = localStorage.getItem('dark')
        if (storageValue === 'true') {
            return darkTheme
        } else {
            return lightTheme
        }
    })

    const [isDark, setIsDark] = useState(() => {
        const storageValue = localStorage.getItem('dark')
        if (storageValue === 'true') {
            return false
        } else {
            return true
        }
    })

    const toggleTheme = () => {
        setIsDark(!isDark)
        setTheme(isDark ? darkTheme : lightTheme)
        localStorage.setItem('dark', isDark)
    }


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=36a5cf369299f47bcf5680019dc6275d&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => { setMovies(data.results) })
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <GlobalStyles />
                <TopBar>
                    <MaterialUiSwitch
                        onClick={toggleTheme}
                        checked={!isDark}
                    />
                </TopBar>
                <h1>TOP 20 Filmes populares</h1>
                <MovieList> {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}>
                                <img src={`${imgPath}${movie.poster_path}`} alt={movie.title} />
                            </Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
                </MovieList>
                <Footer/>
            </Container >
        </ThemeProvider>


    );
};

export default Home;