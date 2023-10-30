import { About, Testimonial, Header, Footer, Work, Skills } from "./container";
import Navbar from "./components/Navbar";
import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Header />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
