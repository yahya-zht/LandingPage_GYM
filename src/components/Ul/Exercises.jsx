import React from "react";
import "../../style/exercises.css";
import Image_2 from "../../assets/image/img06.jpg";
import Image_3 from "../../assets/image/img04.jpg";
import Image_4 from "../../assets/image/img05.jpg";
function Exercises() {
    return (
        <section id="Schedule">
            <div className="container exercise_container">
                <div className="exercise_top">
                    <h2 className="section_title">
                        Benefits of <span className="highlights">Exercise</span>
                    </h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, eaque,
                        <br /> iusto aperiam blanditiis, voluptatem expedita temporibus accusamus
                    </p>
                </div>
                {/* ======== exercise list ========= */}
                <div className="exercise_wrapper">
                    <div className="exercise_item" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="exercise_icon">
                            <img src={Image_2} alt="" />
                        </div>
                        <div className="exercise_content">
                            <h4>Halthy Life</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="exercise_item" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="exercise_icon">
                            <img src={Image_3} alt="" />
                        </div>
                        <div className="exercise_content">
                            <h4>Increased Flexibility</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="exercise_item" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="exercise_icon">
                            <img src={Image_4} alt="" />
                        </div>
                        <div className="exercise_content">
                            <h4>Reducing Blood Pressure</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Exercises;
