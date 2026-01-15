import Home from "../app/index";
import HeroSection from "./HeroSection";
import Footer from "../app/footer"
import CreationsSection from "./creations/page"
import CollectionsSection from "./collections/page"
import VybeSection from "../app/vybesection"
import Omar from "../app/omar"

export default function Page() {
  return (
    <>
      <HeroSection />
      <CollectionsSection />
      <CreationsSection />
      <Omar />
      <VybeSection />
      <Footer />

    </>
  );
}
