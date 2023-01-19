import React from 'react';
import "./Testimonial.scss";
import testimonial1 from "../../assets/testimonial1.png";
import testimonial2 from "../../assets/testimonial2.png";
import avatar from "../../assets/avatar.png";

const Testimonial = () => {

    return (
        <section className="testimonial-section" id="Blog">
            <div className="title">
                <h1>What our Happy Customers Say About Us</h1>
            </div>
            <div className="testimonials">
                <div className="testimonial-image-one">
                    <img src={testimonial1} alt="testimonials" />
                </div>
                <div className="testimonial">
                    <div className="title">
                        <div className="image">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className="info">
                            <h3>John Doe</h3>
                            <span>Full Stack Developer</span>
                        </div>
                    </div>
                    <p className="desrciption">
                        Jetrips Hotel is an excellent choice for anybody for considering
                        hosting their events there. Top level facilities and excellent staff
                        make for a briallant environment within which to operate. The hotel
                        is meticulous in its planning.
                    </p>
                </div>
                <div className="testimonial-image-two">
                    <img src={testimonial2} alt="testimonials" />
                </div>
            </div>
        </section>
    )
};

export default Testimonial;