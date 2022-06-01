import styled from 'styled-components';
import ImgBg from '../../Images/Delish-0.jpg';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.1), 
    rgba(0,0,0,0.5)), url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`;

export const HeroContent = styled.div`
height: calc(100vh -80px);
maxHeight: 100%;
padding: 0rem calc((100vw - 1300px) /2);
`

export const HeroItems = styled.div` 
    display: flex;
    flex-Direction: column;
    justify-Content: center;
    align-Items: flex-start;
    height: 100vh;
    max-Height: 100%;
    padding: 0 2rem;
    color: #fff;
    text-transform: uppercase;
    lineHeight: 1;
    fontWeight: bold;
    
    @media screen and(max-Width: 650px){
        width: 100%;

    }
`;


export const HeroH1 = styled.h1`
    fontSize: clamp(2.5rem, 10vw, 5rem);
    margin-Bottom: 1rem;
    box-Shadow: 3px 5px yellow;
    letterSpacing: 3px;
    
`

export const HeroP = styled.p`
    fontSize: clamp(2rem, 2.5vw, 3rem);
    marginBottom: 2rem;
`

export const HeroBtn = styled.button`
    fontSize: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    border-Radius: 6px;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-out;


    &:hover{
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: black;
    }
`
