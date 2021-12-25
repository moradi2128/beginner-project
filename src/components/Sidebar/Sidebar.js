import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'
const Sidebar = (props) => {
    return (
        <>
            <SidebarContainer
                isOpen={props.isOpen}
                onClick={props.toggleHandler}>
                <Icon onClick={props.toggleHandler}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about" onClick={props.toggleHandler}>About</SidebarLink>
                        <SidebarLink to="discover" onClick={props.toggleHandler}>Discover</SidebarLink>
                        <SidebarLink to="services" onClick={props.toggleHandler}>Services</SidebarLink>
                        <SidebarLink to="signup" onClick={props.toggleHandler}>Sign Up</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="/signin">Sign In</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
