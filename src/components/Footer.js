import React from 'react'
import styled from 'styled-components'

const BgWrap = styled.div`
    padding-left: 100px;
    width: 90%;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1024px){
        width: 95%;
    }
    @media screen and (max-width: 640px){
        width: 80%;
        padding-left: 0;
    }
`
const Icon = styled.a`
    background: url("./images/icons/github.png")center center no-repeat;
    background-size: cover;
    width: 70px;
    height: 70px;
    cursor: pointer;
`
const TextWrap = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
`
const Text = styled.div`
    font-size: 14px;
`
function Footer({myRef}) {
  return (
    <>
        <BgWrap>
            <Icon href={"https://github.com/Parkminjeong13"} target="_blank"></Icon>
            <Text>Github로 이동</Text>
            <TextWrap ref={myRef}>
                <Text>last update : 2023.11.06</Text>
                <Text>ⓒ 2023. MinJeong All Rights Reserved.</Text>            
            </TextWrap>
        </BgWrap>
    </>
  )
}

export default Footer