import Navigation from "./components/navigation-bar";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";

function App() {
  return (
    <div className="lg:max-w-[70%] lg:mx-auto">
      <Navigation />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}

export default App;
