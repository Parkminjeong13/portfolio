import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import Manuscript from "./components/home/Manuscript";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


const TopButton = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
  padding: 15px;
  font-size: 20px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
  &:hover{background-color: #eee}
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
      <TopButton onClick={()=>moveTop()}><FontAwesomeIcon icon={faArrowUp}/></TopButton>
    </>
  );
}

export default App;
