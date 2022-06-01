import React from 'react'
import { 
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  Line,
  FooterP
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
          <SocialMedia>
              <SocialMediaWrap>
                  <SocialLogo to='/'>DELISH KITCHEN</SocialLogo>
                  <SocialIcons>
                      <SocialIconLink href="/" target="_blank" aria-lable="Facebook" rel="noopenner noreferrer">
                        <FaFacebook/>
                      </SocialIconLink>
                      <SocialIconLink href="https://instagram.com/uzyyy3?igshid=YTM0ZjI4ZDI=" target="_blank" aria-lable="Instagram" rel="noopenner">
                        <FaInstagram/>
                      </SocialIconLink>
                      <SocialIconLink href="/" target="_blank" aria-lable="Twitter" rel="noopenner noreferrer">
                        <FaTwitter/>
                      </SocialIconLink>
                  </SocialIcons>
              </SocialMediaWrap>
          </SocialMedia>
      </FooterWrap>
      <Line/>
         <FooterP>copyright © 2022 Designed And Developed by Peliams Tech hub All rights reserved. </FooterP>
    </FooterContainer>
  )
}

export default Footer
