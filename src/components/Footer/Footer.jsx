import React from 'react';
import "./Footer.scss";
import logo from "../../assets/logo.png";
import Button from '../Button/Button';

const Footer = () => {
    const quickLinks = [
        "About Us",
        "Our Team",
        "Contact Us",
        "Destinations",
        "Latest Blog",
    ];
    const supportLinks = [
        "Forum",
        "Tour Guide",
        "Privacy Policy",
        "Customer Support",
        "Terms & Condition",
    ];

    return (
        <container className="footer">
            <div className="upper-footer">
                <div className="col">
                    <div className="brand">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <p className="description">
                            You can dream, create, design, and build the most wonderful place.
                        </p>
                    </div>
                    <ul>
                        <li>
                            <span>+01 123456789</span>
                        </li>
                        <li>
                            <span>ravel@info.com</span>
                        </li>
                        <li>
                            <span>ravel.com</span>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h2>Quick Links</h2>
                    <ul>
                        {quickLinks.map((link) => (
                            <li key={link}>{link}</li>
                        ))}
                    </ul>
                </div>
                <div className="col">
                    <h2>Support</h2>
                    <ul>
                        {supportLinks.map((link) => (
                            <li key={link}>{link}</li>
                        ))}
                    </ul>
                </div>
                <div className="col">
                    <h2>Newsletter</h2>
                    <div className="newsletter">
                        <input type="text" placeholder="Your Email" />
                        <Button text="Subscribe Now" />
                    </div>
                </div>
            </div>
            <div className="lower-footer">
                <span>
                    Copyright &copy; Ravel. Designed by <a href="https://github.com/mrinnnmoy" target="_blank">Mrinmoy Porel</a>
                </span>
            </div>
        </container>
    )
};

export default Footer;