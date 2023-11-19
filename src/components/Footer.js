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
    @media screen and (max-width: 767px){
        width: 80%;
        padding-left: 0;
    }
`
const Title = styled.h3`
    font-size: 36px;
    margin-bottom: 50px;
`
const IconWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 300px;
    justify-content: center;
    @media screen and (max-width: 767px){
        justify-content: center;
        margin-bottom: 0;
    }
`
const Linkbox = styled.a`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 50px;
`
const LinkIcon = styled.div`
    /* background: url("./images/icons/github.svg")center center no-repeat; */
    background-size: cover;
    width: 120px;
    height: 120px;
    cursor: pointer;
`
const TextWrap = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 30px;
`
const Text = styled.span`
    font-size: 16px;
    margin-bottom: 10px;
`
const LinkText = styled(Text)`
    font-size: 20px;
`
function Footer({myRef}) {
    const list = [
        {
            "title" : "github",
            "link" : "https://github.com/Parkminjeong13",
            "img" : "./images/icons/github.svg"
        },
        {
            "title" : "kakaotalk",
            "link" : "https://open.kakao.com/o/snbfz9Rf",
            "img" : "./images/icons/openchat.jpg"
        },
        {
            "title" : "gmail",
            "link" : "mailto:ming1320@gmail.com",
            "img" : "./images/icons/gmail.svg"
        },
    ]
  return (
    <>
        <BgWrap>
            <Title>Contact</Title>
            <IconWrap>
                {
                    list.map((e,i)=>{
                        return (
                            <Linkbox key={i} href={e.link} target="_blank" title={e.title}>
                                <LinkIcon style={{ backgroundImage: `url(${e.img})`}}></LinkIcon>
                                <LinkText>{e.title}</LinkText>
                            </Linkbox>
                        )
                    })
                }
            </IconWrap>
            <TextWrap ref={myRef}>
                <Text>Last Update : 2023.11.19</Text>
                <Text>ⓒ 2023. MinJeong All Rights Reserved.</Text>            
            </TextWrap>
        </BgWrap>
    </>
  )
}

export default Footer