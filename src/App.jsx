import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Highlights from "./pages/Highlights";
import Footer from "./pages/Footer";
import Loadingscreen from "./components/Loadingscreen";
import { useEffect, useState } from "react";


const App = () => {
  const [loading, setLoading] =useState(true)
    useEffect(()=> {
      setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading){
      return <Loadingscreen />
    }

  return (
    <>
    <main >
      <Navbar  />
      <Hero />
      <About />
      <Highlights />
      <Footer />
    </main>

    </>
  )
}

export default App
