import React from "react";
import "../../style/start.css";
import imag05 from "../../assets/image/img04.jpg";

function Start() {
    return (
        <section id="Classes">
            <div className="container">
                <div className="start_wrapper">
                    <div className="start_img">
                        <img src={imag05} alt="" data-aos="fade-left" data-aos-duration="1500" />
                    </div>
                    <div className="start_content" data-aos="fade-right" data-aos-duration="1500">
                        <h2 className="section_title">
                            Ready to make a <span className="highlights">change?</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, asperiores quidem aliquid provident
                            tenetur,
                        </p>
                        <button className="register_btn">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Start;
