import React, { useState } from 'react';
import "./Home.scss";
import HeroImage from "../../assets/hero.png";
import Button from "../Button/Button";

const Home = () => {
    const [value, setValue] = useState("$500 - $10,000");

    return (
        <section className="home-section" id="Home">
            <div className="background">
                <img src={HeroImage} alt="Hero" />
            </div>
            <div className="content">
                <div className="info">
                    <h1>It's Time To</h1>
                    <h1>Explore The World</h1>
                    <Button text="Plan Your Trip" />
                </div>
                <div className="planner">
                    <form>
                        <div className="row">
                            <label>Destinations</label>
                            <select>
                                <option>London, UK</option>
                                <option>Udaipur, India</option>
                                <option>Rajasthan, India</option>
                                <option>Rameshwaram, Chennai</option>
                            </select>
                        </div>
                        <div className="row">
                            <label>Check In</label>
                            <input type="date" />
                        </div>
                        <div className="row">
                            <label>Price Range</label>
                            <input
                                type="text"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </div>
                        <div className="row">
                            <Button text="Discover More" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Home;