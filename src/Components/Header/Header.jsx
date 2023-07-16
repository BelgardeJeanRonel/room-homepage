import { useState } from "react"
import "./Header.scss"

const dataNav = [
    {
        link : "index.html",
        name : "home"
    },
    {
        link : "#",
        name : "shop"
    },
    {
        link : "#",
        name : "about"
    },
    {
        link : "#",
        name : "contact"
    }
]

export function Header () {

    const [showNav, setShowNav] = useState(false);

    const handleClickOpenMenu = () => {
        setShowNav(!showNav);
    }

    const handleClickCloseMenu = () => {
        setShowNav(!showNav);
    }

    const handleClickLink = () => {
        setShowNav(false);
    }

    const lisElement = dataNav.map( (data) => 
        <li key={data.name} onClick={handleClickLink}><a href={data.link}>{data.name}</a></li>
    );

    const classNav = (showNav) ? "header-menu-nav show-nav" : "header-menu-nav";
    const classBgModal = (showNav) ? "bg-modal show-nav" : "bg-modal";
 
    return (
        <header className="header">
            <div className="header-logo">
                <a href="index.html"><img src="/images/logo.svg" alt="" /></a>
            </div>

            <div className="header-menu">
                <img onClick={handleClickOpenMenu} className="icon-open" src="/images/icon-hamburger.svg" alt="" />
                <div className={classBgModal}></div>
                <nav className={classNav}>
                    <img onClick={handleClickCloseMenu} className="icon-close" src="/images/icon-close.svg" alt="" />
                    <ul>
                        {lisElement}
                    </ul>
                </nav>
            </div>
        </header>
    )
}