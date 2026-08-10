import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import Manifesto from "./sections/Manifesto";
import District from "./sections/District";
import { SplitSeaView, SplitPenthouse } from "./sections/Splits";
import Developers from "./sections/Developers";
import Infrastructure from "./sections/Infrastructure";
import Lifestyle from "./sections/Lifestyle";
import Comparison from "./sections/Comparison";
import Calculator from "./sections/Calculator";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Manifesto />
      <District />
      <SplitSeaView />
      <Developers />
      <SplitPenthouse />
      <Infrastructure />
      <Lifestyle />
      <Comparison />
      <Calculator />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
