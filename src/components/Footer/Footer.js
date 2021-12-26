import React from 'react'
import { animateScroll as scroll } from 'react-scroll/modules';

import {
    FaFacebook,
    FaYoutube,
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrap,
    FooterLinkItem,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,


} from './FooterElements'
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrap>
                        <FooterLinkItem>
                            <FooterLinkTitle>درباره ما</FooterLinkTitle>
                            <FooterLink to="/signin">چگونه کار می کند</FooterLink>
                            <FooterLink to="/signin">گواهینامه ها</FooterLink>
                            <FooterLink to="/signin">مشاغل</FooterLink>
                            <FooterLink to="/signin">سرمایه گذاران</FooterLink>
                            <FooterLink to="/signin">شرایط استفاده از خدمات</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>تماس با ما</FooterLinkTitle>
                            <FooterLink to="/signin">چگونه کار می کند</FooterLink>
                            <FooterLink to="/signin">گواهینامه ها</FooterLink>
                            <FooterLink to="/signin">مشاغل</FooterLink>
                            <FooterLink to="/signin">سرمایه گذاران</FooterLink>
                            <FooterLink to="/signin">شرایط استفاده از خدمات</FooterLink>
                        </FooterLinkItem>
                    </FooterLinksWrap>
                    <FooterLinksWrap>
                        <FooterLinkItem>
                            <FooterLinkTitle>ویدیوها</FooterLinkTitle>
                            <FooterLink to="/signin">چگونه کار می کند</FooterLink>
                            <FooterLink to="/signin">گواهینامه ها</FooterLink>
                            <FooterLink to="/signin">مشاغل</FooterLink>
                            <FooterLink to="/signin">سرمایه گذاران</FooterLink>
                            <FooterLink to="/signin">شرایط استفاده از خدمات</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>شبکه های اجتماعی</FooterLinkTitle>
                            <FooterLink to="/signin">چگونه کار می کند</FooterLink>
                            <FooterLink to="/signin">گواهینامه ها</FooterLink>
                            <FooterLink to="/signin">مشاغل</FooterLink>
                            <FooterLink to="/signin">سرمایه گذاران</FooterLink>
                            <FooterLink to="/signin">شرایط استفاده از خدمات</FooterLink>
                        </FooterLinkItem>
                    </FooterLinksWrap>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            WebFarda
                        </SocialLogo>
                        <WebsiteRights>WebFarda . {new Date().getFullYear()} تمامی حقوق محفوظ می باشد</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
