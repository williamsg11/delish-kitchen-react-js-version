import React from 'react'
import {
    SidebarContainer,  
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarRoute,
    SideBtnWrap,
    SidebarLink
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) =>{
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
          <CloseIcon/>
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Meals</SidebarLink>
          <SidebarLink to="/">Dessert</SidebarLink>
          <SidebarLink to="/">Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
          <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar
