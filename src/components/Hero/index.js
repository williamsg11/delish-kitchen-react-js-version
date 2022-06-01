import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {
  HeroContainer, 
  HeroContent, 
  HeroItems, 
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements'


const Hero =() => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <HeroContainer>
        <Navbar toggle={toggle}/>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
        <HeroContent>
          <HeroItems>
            <HeroH1>MOST DELISIOUS<br></br>  HOME MADE NIGERIAN DISHIES</HeroH1>
            <HeroP>READY IN 5 MINUTES</HeroP>
            <HeroBtn>Place Order</HeroBtn>
          </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero
