import styled from "styled-components";

export const Container = styled.div`
margin: 0;
  width: 100%;
  height: 10%;
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  font-size: 120%;

  &:hover {
    cursor: pointer;  
  }
`