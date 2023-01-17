import React from 'react';
import cuba from "../../assets/cuba.png";
import paris from "../../assets/paris.png";
import japan from "../../assets/japan.png";
import Button from "../Button/Button";

const Destinations = () => {
    const data = [
        {
            name: "Cuba City",
            image: cuba,
        },
        {
            name: "Paris",
            image: paris,
        },
        {
            name: "Japan",
            image: japan,
        },
    ];

    return (
        <section className="destination-section" id="destination">
            <div className="info">
                <h2>
                    Top <span>Destinations</span> In The World
                </h2>
                <p>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout from it.
                </p>
                <Button text="Discover More" />
            </div>

            <div className="destinations">
                {data.map(({ name, image }) => {
                    return (
                        <div className="destination" key={name}>
                            <div className="image">
                                <img src={image} alt="destinations" />
                            </div>
                            <div className="name">
                                <h3>{name}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
};

export default Destinations;