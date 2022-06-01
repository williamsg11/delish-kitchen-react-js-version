import styled from "styled-components";
import { Link } from "react-router-dom";


export const FooterContainer = styled.footer`
background:  #0d0909;
`

export const FooterWrap = styled.div`
padding:  16px 24px;
display:  flex;
flex-flex-Direction: column;
justify-Content: center;
alignI-tems: center;
margin: 0 auto;
`;

export const SocialMedia = styled.section`
max-Width: 1300px;
width: 100%;
`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-Content:  space-between;
align-Items:  center;
max-Width: 1100px;
margin:  16px auto 0 auto;


@media  screen and (max-width: 820px) {
    flex-Direction: column;
}
`;


export const SocialLogo = styled(Link)`
color:  #fff;
justify-self: start;
cursor: pointer;
text-Decoration: none;
font-Size: 1.5rem;
display: flex;
align-Items: center;
margin-Bottom: 16px;
font-font-Weight: bold;
`;


export const SocialIcons = styled.div`
display:  flex;
justify-Content: space-between;
align-Items: center;
width: 230px;
`;


export const SocialIconLink = styled.a`
color: #fff;
font-Size: 24px;


&:hover{
    color: #e31837;
}
`;


export const Line = styled.hr`
color: white;
width: 250px;
margin: auto;
`

export const FooterP = styled.p`
color: white;
text-Align: center;
margin-top: 15px;
`

