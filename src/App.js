import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import Manuscript from "./components/home/Manuscript";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { useRef } from "react";
import styled from "styled-components";

const TopButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 10px;
  font-size: 20px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
`;


function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const navRefs = { home:homeRef, about: aboutRef, portfolio: portfolioRef, contact: contactRef };

  const moveTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <GlobalStyle/>
      <Nav navRefs ={navRefs} />
      <Manuscript myRef={homeRef}/>
      <About myRef={aboutRef}/>
      <Portfolio myRef={portfolioRef}/>
      <Footer myRef={contactRef}/>
      <TopButton onClick={()=>moveTop()}>Top</TopButton>
    </>
  );
}

export default App;
