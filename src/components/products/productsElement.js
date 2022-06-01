import styled from 'styled-components'

export const ProductsContainer  = styled.div`
min-height: 100vh;
padding: 5rem calc((100vw - 1300px) /2);
background: #150f0f;
color: #fff;
`

export const ProductsWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-Content: center;
margin: 0 auto;
`

export const ProductCard = styled.div`
margin: 0 2rem;
line-Height: 2;
width: 300px;
`

export const ProductImg = styled.img`
height: 250px;
min-Width: 300px;
max-Width:  100%;
box-Shadow: 8px 8px #fdc500;
`

export const ProductsHeading = styled.h1`
font-Size: clamp(2rem, 2.5vw, 3rem);
text-Align: center;
margin-Bottom: 5rem;
`

export const ProductTitle = styled.h2`
font-font-Weight: 400;
font-size: 1.5rem;
`

export const ProductInfo = styled.div`
display: flex;
 flex-Direction: column;
 justify-Content: center;
 align-Items: center;
 padding: 2rem;
 text-Align: center;
`

export const ProductDesc = styled.p`
margin-Bottom: 1rem;
`

export const ProductPrice = styled.p`
margin-Bottom: 1rem;
font-Size: 2rem;
`

export const ProductButton = styled.button`
font-Size: 1rem;
padding:  1rem 4rem;
border: none;
border-Radius: 6px;
background: #e31837;
color: #fff;
transformStyle:  0.2 ease-out;


&:hover{
  background: #ffc500;
  transition: 0.2s ease-out;
  cursor: pointer;
  color:  #000;
}
`
