import React from "react";
import "../../style/pricing.css";

function Pricing() {
    return (
        <section id="Pricing">
            <div className="container">
                <div className="pricing_top">
                    <h2 className="section_title">
                        Gym <span className="highlights">Pricing</span>Plan
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam <br /> ut reiciendis enim perferendis
                        fuga fugiat blanditiis autem architecto praesentium nulla nesciunt,
                    </p>
                </div>
                {/* ======== pricing wrapper ========= */}
                <div className="pricing_wrapper">
                    <div className="pricing_item" data-aos="fade-right" data-aos-duration="1500">
                        <div className="pricing_card-top">
                            <h2 className="section_title">Regular member</h2>
                            <h2 className="pricing section_title">
                                50$ <span>/month</span>
                            </h2>
                        </div>
                        <div className="services">
                            <ul>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                    Unlimited access to the gym
                                </li>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                    Customer support
                                </li>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                    Personal trainer
                                </li>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                    Standard options
                                </li>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                    5 classes per week
                                </li>
                            </ul>
                            <button className="register_btn">Join Now</button>
                        </div>
                    </div>

                    <div className="pricing_item pricing_item-02" data-aos="fade-up" data-aos-duration="1500">
                        <div className="pricing_card-top">
                            <h2 className="section_title">Premium Member</h2>
                            <h2 className="pricing section_title">
                                70$ <span>/month</span>
                            </h2>
                        </div>
                        <div className="services">
                            <ul>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                    Unlimited access to the gym
                                </li>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                    Customer support
                                </li>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                    Personal trainer
                                </li>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                    Standard options
                                </li>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                    5 classes per week
                                </li>
                            </ul>
                            <button className="register_btn">Join Now</button>
                        </div>
                    </div>

                    <div className="pricing_item" data-aos="fade-left" data-aos-duration="1500">
                        <div className="pricing_card-top">
                            <h2 className="section_title">Standard Member</h2>
                            <h2 className="pricing section_title">
                                100$ <span>/month</span>
                            </h2>
                        </div>
                        <div className="services">
                            <ul>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                    Unlimited access to the gym
                                </li>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                    Customer support
                                </li>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                    Personal trainer
                                </li>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                    Standard options
                                </li>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                    5 classes per week
                                </li>
                            </ul>
                            <button className="register_btn">Join Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
