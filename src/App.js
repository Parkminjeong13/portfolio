import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import Manuscript from "./components/home/Manuscript";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <GlobalStyle/>
      <Nav />
      <Manuscript />
      <About />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
