import { About, Testimonial, Header, Footer, Work, Skills } from "./container";
const App = () => {
  return (
    <div className="app">
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
