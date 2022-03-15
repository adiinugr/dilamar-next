import Testimony from "../components/homepage/Testimony";
import Header from "../components/homepage/Header";
import Hero from "../components/homepage/Hero";
import Service from "../components/homepage/Service";
import Template from "components/homepage/Template";
import GetStarted from "../components/homepage/GetStarted";
import Package from "../components/homepage/Package";
import Faq from "../components/homepage/Faq";
import ContactUs from "../components/homepage/ContactUs";
import HomeFooter from "../components/homepage/HomeFooter";

import CustomHead from "components/CustomHead";

const Home = () => {
  return (
    <div className="font-poppins">
      <CustomHead />
      <Header />
      <Hero />
      <Service />
      <Template />
      <GetStarted />
      <Package />
      <Testimony />
      <Faq />
      <ContactUs />
      <HomeFooter />
    </div>
  );
};

export default Home;
