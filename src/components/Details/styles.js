import styled from "styled-components"

export const Container = styled.div`
    padding: 2rem 0;

    h1{
        margin: 3rem 0;
    }
    .movie{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 70%;
        border-radius: 1rem;
    }

    .details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        max-width: 50%;
    }

    button{
        background: ${props => props.theme.colors.primary};
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: all 0.3s;
    }

    button:hover{
        background: ${props => props.theme.colors.hover};
    }

    .release-date{
        opacity: 0.5;
    }

    @media (min-width:968px) {
        img{
            width: 30vw;
            border-radius: 1rem;
        }
        .movie {
            display:flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        .details{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-left: 3rem;
            max-width: 50%;
        }   
    }
`

export const Sinopse = styled.span`
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 120%;

    @media (min-width:968px) {
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 110%;
    }
`