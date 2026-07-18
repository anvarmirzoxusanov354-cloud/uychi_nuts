import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LangProvider } from "./LangContext";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <LangProvider>
      <div className="relative min-h-screen selection:bg-primary-500 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}

export default App;
