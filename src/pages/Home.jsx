import Hero from "../components/home/Hero";
//import Services from "./Services";
//import Packages from "../components/home/Packages";
import Services3DSection from "../components/Services3DSection";
//import ServiceDetail3D from "../components/ServiceDetail3D";
import Testimonials from "./Testimoials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services3DSection />
      <Testimonials />
      {/* Ajoutez ici vos autres composants de la page d'accueil */}
    </div>
  );
}
