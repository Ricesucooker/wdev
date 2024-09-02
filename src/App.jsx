import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";


const App = () => {

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show')
      }

    });
  });

  const hiddenElements = document.querySelectorAll('hide');
  hiddenElements.forEach((el) => observer.observe(el));

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
