import React from 'react';
import "./Services.scss";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";

const Services = () => {
    const data = [
        {
            image: service1,
            title: "Choose Destination",
            description: "Lorem Ipsum is simply dummy text of the printing setting",
        },
        {
            image: service2,
            title: "Explore the Place",
            description: "Lorem Ipsum is simply dummy text of the printing setting",
        },
        {
            image: service3,
            title: "Start Your Journey",
            description: "Lorem Ipsum is simply dummy text of the printing setting",
        },
        {
            image: service4,
            title: "Let's Enjoy",
            description: "Lorem Ipsum is simply dummy text of the printing setting",
        },
    ];

    return (
        <section className="services-section">
            <div className="services">
                {data.map(({ image, title, description }) => {
                    return (
                        <div className="service" key={title}>
                            <img src={image} alt="service" />
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    )
};

export default Services;