import React, { useState } from 'react'
import styled from 'styled-components'

const NavBg = styled.div`
    width: 40px;
    height: 100%;
    background-color: #333;
    position: fixed;
    z-index: 100;
    top: 0;
    @media screen and (max-width: 640px){
        display: none;
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
        background: ${props => props.$isActive ? 'linear-gradient(to top, #FFD84B 40%, transparent 40%);' : '#fff'};
    }
`
function Nav({navRefs}) {
    
    const [isActive, setIsActive] = useState(-1);

    const nav = [
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
  return (
    <>
        <NavBg>
            <ContentWrap>
                {
                    nav.map((e,i)=>{
                        return (
                            <Title key={i} $isActive={isActive === i} onClick={()=>{setIsActive(i); e.ref.current.scrollIntoView({ behavior: 'smooth' }); }}>
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