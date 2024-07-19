import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import Header from "./components/Header/Header";
import Exercises from "./components/Ul/Exercises";
import Hero from "./components/Ul/Hero";
import Start from "./components/Ul/Start";
import Pricing from "./components/Ul/Pricing";
import Testimonials from "./components/Ul/Testimonials";
import Footer from "./components/Ul/Footer";
import "swiper/css/bundle";
function App() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <Header />
            <Hero />
            <Exercises />
            <Start />
            <Pricing />
            <Testimonials />
            <Footer />
        </>
    );
}

export default App;
