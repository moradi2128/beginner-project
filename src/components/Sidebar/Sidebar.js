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
                        <SidebarLink to="about" onClick={props.toggleHandler}>درباره ما</SidebarLink>
                        <SidebarLink to="discover" onClick={props.toggleHandler}>پیشنهاد ویژه</SidebarLink>
                        <SidebarLink to="services" onClick={props.toggleHandler}>خدمات</SidebarLink>
                        <SidebarLink to="signup" onClick={props.toggleHandler}>ثبت نام</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="/signin">ورود</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
