import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Press from "@/components/Press";
import Experience from "@/components/Experience";
import Info from "@/components/Info";
import Reserve from "@/components/Reserve";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Press />
      <Experience />
      <Info />
      <Reserve />
      <Footer />
    </main>
  );
}
