import Navbar from "./component/navbar/navbar";
import Intro from "./component/intro/intro";
import Skills from "./component/skills/skills";
import Portfolios from "./component/portfolios/portfolios";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Portfolios />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
