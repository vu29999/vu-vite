import { useEffect } from "react";

import Header from "../components/Header/Header";
import MainVisual from "../components/MainVisual/MainVisual";
import MainContent01 from "../components/MainContent01/MainContent01.jsx";
import MainContent02 from "../components/MainContent02/MainContent02.jsx";
import MainContent03 from "../components/MainContent03/MainContent03.jsx";
import QuickLink from "../components/QuickLink/QuickLink.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Home = () => {
    useEffect(() => {
        document.body.classList.add('main');
        return () => {
            document.body.classList.remove('main');
        };
    }, []);

    return (
        <>
            <Header />
            <MainVisual />
            <MainContent01 />
            <MainContent02 />
            <MainContent03 />
            <QuickLink />
            <Footer />
        </>
    );
};

export default Home;
