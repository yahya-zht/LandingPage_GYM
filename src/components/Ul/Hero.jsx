import React from "react";
import Image from "../../assets/image/img07.jpg";
import image_2 from "../../assets/image/img03.jpg";
import "../../style/hero.css";
const Hero = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="hero_wrapper">
                    {/* =========== hero content ========= */}
                    <div className="hero_content">
                        <h2 className="section_title" data-aos="fade-up" data-aos-duration="1500">
                            Exercise is the to a <span className="highlights">Healthy</span> Lifestyle
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            <br /> Vero omnis culpa voluptatem minus amet. Quidem commodi veritatis aliquam.
                        </p>
                        <div className="hero_btns" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
                            <button className="register_btn">Get started</button>
                            <button className="watch_btn">
                                <span>
                                    <i class="fa-solid fa-play"></i>
                                </span>
                                Watch Video
                            </button>
                        </div>
                    </div>
                    {/* =========== hero img ========= */}
                    <div className="hero_img">
                        <div className="hero_img-wrapper">
                            <div className="box-01">
                                <div className="box-02">
                                    <div className="box-03">
                                        <div className="box_img">
                                            <img src={Image} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="heart_rate" data-aos="fade-right" data-aos-duration="1500">
                                <h5>Heart Rate</h5>
                                <span>
                                    <i class="fa-solid fa-heart"></i>
                                </span>
                                <h5>2567 BPM</h5>
                            </div>
                            <div className="gym_location" data-aos="fade-left" data-aos-duration="1500">
                                <span>
                                    <i class="fa-solid fa-map-pin"></i>
                                </span>
                                <h5>Find a new gym near you</h5>
                            </div>
                            <div className="dumble_icon" data-aos="fade-down" data-aos-duration="1500">
                                <img src={image_2} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
