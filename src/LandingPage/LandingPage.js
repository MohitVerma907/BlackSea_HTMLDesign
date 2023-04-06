import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import Geographical from "../Geographical/Geographical";
import NavBar from "../NavBar/NavBar";
import WelcomeSection from "../WelcomeSection/WelcomeSection";


const LandingPage = () => {
    return(
        <main>
            <section className="Hoggarth_Section_NavBar">
                <NavBar/>
            </section>  
            <section className="hogarth_Welcome_Section_2">
                <WelcomeSection/>
            </section>
            <section className="hogarth_AboutUs_Section_3">
                <AboutUs/>
            </section>
            <seciton className="hogarth_Geographical_Section_4">
                <Geographical
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </seciton>
            <section className="hogarth_Footer_Section_5">
                <Footer/>
            </section>
        </main>
    )
}
export default LandingPage;