import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    zIndex: 999;
    width: 350px;
    height: 100%;
    background: #ffc500;
    display: grid;
    align-Items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({isOpen})=>(isOpen ? '0' : '-1000px')};


    @media screen and (maxWidth: 400px){
        width: 100%
    }
`

export const CloseIcon = styled(FaTimes)`
    color: #000;
    
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transperent;
    border: transperent;
    font-Size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarMenu = styled.div`
    display: grid;
     grid-Template-Columns: 1fr;
     grid-Template-Rows: repeat(3, 80px);   
     text-Align: center;



     @media screen and (maxWidth:  480px){
        grid-Template-Rows: repeat(3, 80px);   
     }
`;

export const SidebarLink = styled(Link)`
     display: flex;
     align-Items: center;
     justify-Content: center;
     font-Size: 1.5rem;
     text-Decoration: none;
     list-Style: none;
     transition: 0.2s ease-in-out;
     color: #000;
     cursor: pointer;


     &:hover{
         color: #e31837;
         transition: 0.2s ease-in-out;

     }
`;






export const SideBtnWrap = styled.div`
     display: flex;
     justify-Content: center;
`


export const SidebarRoute = styled(Link)`
     background: #e31837;
     whiteSpace: nowrap;
     padding: 16px 64px;
     color: #fff;
     fontSize: 16px;
     outline: none;
     border: none;
     cursor: pointer;
     transition: 0.2s ease-in-out;
     text-Decoration: none;


     &:hover{
        transition: 0.2s ease-in-out;
        background: #fff;
        color: #010606;
     }

`;