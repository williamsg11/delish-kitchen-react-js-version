import styled from 'styled-components'
import FeaturePic from '../../Images/111.jpg'

export const FeatureContainer = styled.div`
background: linear-gradient(to right, rgba(0,0,0,0.7), 
    rgba(0,0,0,0.1)), url(${FeaturePic});
    height: 100vh;
    max-Height: 500px;
    background-Position: center;
    background-Size: cover;
    display: flex;
    flex-Direction: column;
    justify-Content: center;
    align-Items: center;
    color: #fff;
    text-Align: center;
    padding:  0 1rem;


    h1{
        font-Size: clamp(3rem, 5vw, 5rem);
    }


    p{
        margin-Bottom: 1rem;
        font-Size: clamp(1rem, 3vw, 2rem);
    }
`

export const FeatureButton = styled.button`
font-Size: 1.4rem;
padding: 0.6rem 3rem;
border: none;
border-Radius: 6px;
background: #ffc500;
color: #000;
transition: 0.2s ease-out;


&:hover{
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;

}
`