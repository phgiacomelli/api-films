import styled from "styled-components"

export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0;
        font-size: 200%;
        
    }
`

export const TopBar = styled.div`
    height: 60px;
    display: flex;
    justify-content: flex-end;
`

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;    
`

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.colors.text};

    img{
        width: 200px;
        border-radius: 1rem;
        margin-bottom: 2rem ;
    }

    span {
        text-align: center;
        font-weight: bold;
        font-size: 120%;
    }

    a {
        transition: all 0.4s;
    }

    a:hover {
        transform: scale(1.1);
    }
`