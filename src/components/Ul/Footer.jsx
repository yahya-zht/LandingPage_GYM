import React from "react";
import "../../style/footer.css";
import logo from "../../assets/image/img04.jpg";
function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer" data-aos="fade-up" data-aos-duration="1500">
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer_box">
                        <div className="logo">
                            <div className="logo_img">
                                <img src={logo} alt="logo" />
                            </div>
                            <h2>Fitbody</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, id culpa repellendus recusandae amet,
                            accusantium vitae eligendi,
                        </p>
                    </div>
                    <div className="footer_box">
                        <h4 className="footer_title">Company</h4>
                        <ul className="footer_links">
                            <li>
                                <a href="#">Our program</a>
                            </li>
                            <li>
                                <a href="#">Our plan</a>
                            </li>
                            <li>
                                <a href="#">Become a member</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_box">
                        <h4 className="footer_title">Quick Links</h4>
                        <ul className="footer_links">
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_box">
                        <h4 className="footer_title">Quick Links</h4>
                        <ul className="footer_links">
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="copyright">Copyright - {year} devloped by Yahya. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
