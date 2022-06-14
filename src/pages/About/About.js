import aboutImg from "../../assets/img/about-us.png";
import Title from '../../components/Title';
import AboutUsForm from './AboutUsForm';
import AboutUsText from './AboutUsText';

function About() {
    return (<>
        <Title title={'Ergo Raffle - About'}/>
        <main>
            <section id="about-us" className="mt-header">
                <div className="container">
                    <h2 className="about-us-title text-center mb-4">About Us</h2>
                    <div className="about-us-container row p-lg-4">
                        <div className="col-lg-7 order-2 order-lg-1">
                            <AboutUsText/>
                        </div>
                        <div className="col-lg-5 order-1 order-lg-2">
                            <img src={aboutImg} alt="Ergo Raffle About Us" className="about-us-img full-width"/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact-us" className="my-5">
                <div className="contact-us-container container">
                    <AboutUsForm/>
                </div>
            </section>
        </main>
    </>)
}

export default About;
