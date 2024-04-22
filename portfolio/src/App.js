import Navigation from "./components/navigation-bar";
import Hero from "./components/hero";
import About from "./components/about";

function App() {
  return (
    <div className="lg:max-w-[70%] lg:mx-auto">
      <Navigation />
      <Hero />
      <About />
    </div>
  );
}

export default App;
