import React, { useState } from 'react'
import styled from 'styled-components'

const NavBg = styled.div`
    width: 40px;
    height: 100%;
    background-color: #333;
    position: fixed;
    z-index: 100;
    @media screen and (max-width: 640px){
        display: none;
    }
`
const ContentWrap = styled.ul``
const Title = styled.li`
    /* width: 120px;
    height: 30px;
    font-size: 24px;
    margin: 40px 10px;
    text-align: right;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 0 7px #fff, 0 0 10px #eee, 0 0 21px #eee;
    border-radius: 10px; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    padding: 10px;
    margin-top: 20px;
    border: 1px solid #eee;
    background-color: ${props => props.$isActive ? '#fff' : '#eee'};
    box-shadow: ${props => props.$isActive && '0 0 7px #fff, 0 0 10px #eee, 0 0 15px #eee'};
    box-sizing: border-box;
`
function Nav() {
    
    const [isActive, setIsActive] = useState(-1);

    const nav = [
        {
            "title": "About"
        },
        {
            "title": "Portfolio"
        },
        {
            "title": "Contact"
        },
    ]
  return (
    <>
        <NavBg>
            <ContentWrap>
                {
                    nav.map((e,i)=>{
                        return (
                            <Title key={i} $isActive={isActive === i} onClick={()=>{setIsActive(i)}}>{e.title}</Title>
                        )
                    })
                }
            </ContentWrap>
        </NavBg>
    </>
  )
}

export default Nav