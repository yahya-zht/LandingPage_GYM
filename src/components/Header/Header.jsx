import React from "react";
import "../../style/header.css";
import logo from "../../assets/image/img01.jpg";
import "../../fontawesome/css/all.min.css";
const nav_links = [
    {
        path: "#home",
        display: "Home",
    },
    {
        path: "#Schedule",
        display: "Schedule",
    },
    {
        path: "#Classes",
        display: "Classes",
    },
    {
        path: "#Pricing",
        display: "Pricing",
    },
];

const Header = () => {
    const handleClick = (e) => {
        e.preventDefault();
        const targetAttr = e.target.getAttribute("href");
        const location = document.querySelector(targetAttr).offsetTop;
        window.scrollTo({
            left: 0,
            top: location - 20,
        });
    };
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="nav_wrapper">
                        {/* ==== LOGO ==== */}
                        <div className="logo">
                            <div className="logo_img">
                                <img src={logo} alt="logo" />
                            </div>
                            <h2>FitBody</h2>
                        </div>
                        {/* ======= navigation menu ========= */}
                        <div className="navigation">
                            <ul className="menu">
                                {nav_links.map((item) => (
                                    <li className="nav_item">
                                        <a onClick={handleClick} href={item.path}>
                                            {item.display}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* ======= nav right ======== */}
                        <div className="nav_right">
                            <button className="register_btn">Register</button>
                            <span className="mobile_menu">
                                <i class="fa-solid fa-bars"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
