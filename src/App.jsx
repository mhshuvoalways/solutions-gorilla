import About from "./components/about";
import Cta from "./components/cta";
import Example from "./components/example";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Hero />
      <About />
      <Example />
      <Services />
      <Cta />
      <p className="border my-16 border-gray-800"></p>
      <p className="text-center my-10">
        © Gorilla Solutions All Rights Reserved.
      </p>
    </div>
  );
};

export default App;
