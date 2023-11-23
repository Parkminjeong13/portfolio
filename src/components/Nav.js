import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const NavBg = styled.div`
    width: 40px;
    height: 100%;
    background-color: #333;
    position: fixed;
    z-index: 100;
    top: 0;
    transform: translateX(0);
    @media screen and (max-width: 767px){
        transform: translateX(-200px);
    }
`
const ContentWrap = styled.ul``
const Title = styled.li`
    width: 100px;
    height: 50px;
    padding: 10px;
    margin-top: 20px;
    border: ${props => props.$isActive ? 'thick double white' : 'thick double red'};
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    p{
        display: inline-block;
        background: ${props => props.$isActive ? 'linear-gradient(to top, #FFD84B 40%, transparent 40%)' : '#fff'};
    }
`
function Nav({navRefs}) {
    
    const [activeIndex, setActiveIndex] = useState(-1);
    const [isClickEvent, setIsClickEvent] = useState(false);

    const nav = [
        // {
        //     "title": "Home",
        //     "ref": navRefs.home
        // },
        {
            "title": "About",
            "ref": navRefs.about
        },
        {
            "title": "Portfolio",
            "ref": navRefs.portfolio
        },
        {
            "title": "Contact",
            "ref": navRefs.contact
        },
    ]
    useEffect(() => {
        const handleScroll = () => {
            if (isClickEvent) return;
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.body.offsetHeight;
            if (docHeight - windowHeight <= scrollTop) {
                setActiveIndex(nav.length - 1);
            } else {
                const aboutTop = navRefs.about.current.offsetTop - 100;
                if (scrollTop < aboutTop) {
                    setActiveIndex(-1);
                } else {
                    nav.forEach((navItem, i) => {
                        const elementTop = navItem.ref.current.offsetTop - 100;
                        const elementBottom = elementTop + navItem.ref.current.offsetHeight;
                        if (scrollTop >= elementTop && scrollTop < elementBottom) {
                            setActiveIndex(i);
                        }
                    });
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [nav, isClickEvent, navRefs.about, navRefs.home]);
    
    const handleClick = (index, ref) => {
        setIsClickEvent(true);
        setActiveIndex(index);
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
            block: 'start'
        });
        new Promise((resolve) => setTimeout(resolve, 1000)).then(() => setIsClickEvent(false));
    }
  return (
    <>
        <NavBg>
            <ContentWrap>
                {
                    nav.map((e,i)=>{
                        return (
                            <Title key={i} $isActive={activeIndex === i} onClick={() => handleClick(i, e.ref)}>
                                <p>{e.title}</p>
                            </Title>
                        )
                    })
                }
            </ContentWrap>
        </NavBg>
    </>
  )
}

export default Nav