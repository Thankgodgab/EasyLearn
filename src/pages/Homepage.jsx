
import Faqs from "../components/Faqs.jsx";
import Features from "../components/Features.jsx";
import HeroSection from "../components/Hero.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Student from "../components/Student.jsx";

function Homepage() {
  return (
    <>
    <main>
        <HeroSection/>
        <Features/>
        <HowItWorks/>
        <Faqs/>
        <Student/>
    </main>
    </>
  )
}

export default Homepage