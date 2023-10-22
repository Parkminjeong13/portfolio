import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import Manuscript from "./components/home/Manuscript";
import About from "./components/About";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <>
      <GlobalStyle/>
      <Nav />
      <Manuscript />
      <About />
      <Portfolio />
    </>
  );
}

export default App;
