import React, { useState } from 'react';
import "./Navbar.scss";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Logo from "../../assets/logo.png";

const Navbar = () => {
    const links = ["Home", "Destination", "Offer", "Tour", "Blog"];
    const [isNavOpen, setIsNavOpen] = useState(false);
    const html = document.querySelector("html");
    html.addEventListener("click", (e) => setIsNavOpen(false));

    return (
        <container className="nav-container" state={isNavOpen ? 1 : 0}>
            <div className="brand">
                <img src={Logo} alt="logo" />
            </div>
            <div className="toggle">
                {isNavOpen ? (
                    <MdClose onClick={() => setIsNavOpen(false)} />
                ) : (
                    <GiHamburgerMenu
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsNavOpen(true);
                        }}
                    />
                )}
            </div>
            <div className={`links ${isNavOpen ? "show" : ""}`}>
                <ul>
                    {links.map((link, index) => {
                        return (
                            <li key={index}>
                                <a href={`#${link}`}>{link}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="account-info">
                <div className="account">
                    <span>
                        <BsPerson />
                    </span>
                    <span>My Account</span>
                </div>
                <div className="search">
                    <IoSearchOutline />
                </div>
            </div>
        </container>
    )
};

export default Navbar;