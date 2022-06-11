import styled from "styled-components";

export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0;
    }
`

export const MenuBar = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
`
export const ToggleChk = styled.input`
    opacity: 0;
    position: absolute;
`


export const ToggleBall = styled.div`
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 22px;
    width: 22px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
`

export const ToggleDarkLight = styled.label`
    background-color: #111;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    height: 26px;
    width: 50px;
    transform: scale(1.2);
    margin-top: 2vh;
    margin-right: 3vh;   
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