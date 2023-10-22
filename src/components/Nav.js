import React from 'react'
import styled from 'styled-components'

const NavBg = styled.div`
    width: 50px;
    height: 100%;
    background-color: #333;
    position: fixed;
    z-index: 100;
`
const ContentWrap = styled.ul``
const Title = styled.li`
    width: 120px;
    height: 30px;
    font-size: 24px;
    margin: 40px 10px;
    text-align: right;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 0 7px #fff, 0 0 10px #eee, 0 0 21px #eee;
    border-radius: 10px;
`
function Nav() {

    const nav = [
        {
            "title": "Home"
        },
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
                            <Title>{e.title}</Title>
                        )
                    })
                }
            </ContentWrap>
        </NavBg>
    </>
  )
}

export default Nav