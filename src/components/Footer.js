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
const IconWrap = styled.div`
    display: flex;
`
const Icon = styled.a`
    /* background: url("./images/icons/github.svg")center center no-repeat; */
    background-size: cover;
    width: 70px;
    height: 70px;
    margin: 20px;
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
    margin-bottom: 10px;
`
function Footer({myRef}) {
  return (
    <>
        <BgWrap>
            <IconWrap>
                <Icon style={{ backgroundImage: `url(${"./images/icons/github.svg"})`}} href={"https://github.com/Parkminjeong13"} target="_blank" title='Github로 이동'></Icon>
                <Icon style={{ backgroundImage: `url(${"./images/icons/kakaotalk.svg"})`}} href={""} target="_blank" title='카카오톡 연락하기'></Icon>
                <Icon style={{ backgroundImage: `url(${"./images/icons/gmail.svg"})`}} href={"mailto:ming1320@gmail.com"} target="_blank" title='메일보내기'></Icon>                
            </IconWrap>
            <TextWrap ref={myRef}>
                <Text>last update : 2023.11.13</Text>
                <Text>ⓒ 2023. MinJeong All Rights Reserved.</Text>            
            </TextWrap>
        </BgWrap>
    </>
  )
}

export default Footer