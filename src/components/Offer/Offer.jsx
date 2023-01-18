import React from 'react';
import "./Offer.scss";
import lighthouse from "../../assets/lighthouse.png";
import { BiWorld } from "react-icons/bi";
import { BsHeadphones, BsPerson } from 'react-icons/bs';

const Offer = () => {
    const data = [
        {
            text: "Best Travel Guide Always for your services",
            icon: <BsPerson />,
            color: "red",
        },
        {
            text: "World class services provided for you",
            icon: <BiWorld />,
            color: "green",
        },
        {
            text: "24x7 Strong Customer Support",
            icon: <BsHeadphones />,
            color: "yellow",
        },
    ];

    return (
        <section className="offer-section" id="Offer">
            <div className="image">
                <img src={lighthouse} alt="lighthouse" />
            </div>
            <div className="content">
                <div className="title">
                    <h1>We are offering in total 793 Tours Across the World</h1>
                </div>
                <ul className="list">
                    {data.map(({ text, icon, color }) => {
                        return (
                            <li key={text}>
                                <div className={`icon ${color}`}>{icon}</div>
                                <div className="text">
                                    <h3>{text}</h3>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    )
};

export default Offer;