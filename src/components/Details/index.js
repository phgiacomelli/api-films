import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Container, Sinopse } from "./styles"
import { TopBar } from "../Home/styles"
import { ThemeProvider } from "styled-components"
import MaterialUiSwitch from "../Switch"
import { darkTheme } from "../../styles/themes/dark"
import { lightTheme } from "../../styles/themes/light"
import GlobalStyles from "../../styles/globalStyles"
import Footer from "../Footer"

function Details() {

    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const img_path = 'https://image.tmdb.org/t/p/w500'

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
    }, [id])

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
                <div className="movie">
                    <img src={movie.image} alt={movie.sinopse} />
                    <div className="details">
                        <h1>{movie.title}</h1>
                        <Sinopse>Sinopse: {movie.sinopse}</Sinopse>
                        <span className="release-date">Data de Lançamento: {movie.releaseDate}</span>
                        <Link to="/">
                            <button>Voltar</button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </Container>
        </ThemeProvider>
    )
}

export default Details