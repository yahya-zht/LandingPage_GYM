import React from "react";
import "../../style/testimonials.css";
import img1 from "../../assets/image/img01.jpg";
import img2 from "../../assets/image/img02.jpg";
import img3 from "../../assets/image/img03.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import EffectCards from "swiper";

function Testimonials() {
    return (
        <section id="">
            <div className="container sliders">
                <h2 className="section_title">Testimonials</h2>
                <Swiper effect={"cards"} grabCursor={true} modules={EffectCards} className="mySwiper">
                    <SwiperSlide>
                        <div className="slide_item">
                            <div className="slide_img-01">
                                <img src={img1} alt="" />
                            </div>
                            <h4>Jesica Fernandes</h4>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis voluptatibus, quasi eveniet
                                facere, eos molestias ab beatae quis optio
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide_item">
                            <div className="slide_img-02">
                                <img src={img2} alt="" />
                            </div>
                            <h4>Jesica Fernandes</h4>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis voluptatibus, quasi eveniet
                                facere, eos molestias ab beatae quis optio
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide_item">
                            <div className="slide_img-03">
                                <img src={img3} alt="" />
                            </div>
                            <h4>Jesica Fernandes</h4>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis voluptatibus, quasi eveniet
                                facere, eos molestias ab beatae quis optio
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Testimonials;
