import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

const App = () => {
 

  return (
    <>
    <main>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Footer />
    </main>

    </>
  )
}

export default App
