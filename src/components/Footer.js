import React, { useEffect, useState } from 'react'
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
    margin: 50px 0;
`
const IconWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 300px;
    justify-content: center;
    @media screen and (max-width: 767px){
        justify-content: center;
        margin-bottom: 50px;
    }
`
const IconBox = styled.a`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 50px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 767px){
        margin: 30px;
    }
`
const IconBg = styled.div`
    /* background: url("./images/icons/github.svg")center center no-repeat; */
    background-size: cover;
    width: 120px;
    height: 120px;
    cursor: pointer;
    @media screen and (max-width: 767px){
        width: 100px;
        height: 100px;
    }
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
const IconText = styled(Text)`
    font-size: 20px;
    width: fit-content;
    &:hover{background: linear-gradient(to top, #FFD84B 20%, transparent 40%)}
`
function Footer({myRef}) {
    const [lastUpdate, setLastUpdate] = useState(null);
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
    useEffect(() => {
        const fetchLastUpdate = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/Parkminjeong13/portfolio/commits');
                const data = await response.json();
                const date = new Date(data[0].commit.committer.date);
                const year = date.getFullYear();
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const day = date.getDate().toString().padStart(2, '0')
                const formatDate = `${year}-${month}-${day}`
                setLastUpdate(formatDate);
            } catch (error) {
                console.error('Failed to fetch last update:', error);
            }
        };
        fetchLastUpdate();
    }, []);
  return (
    <>
        <BgWrap>
            <Title>Contact</Title>
            <IconWrap>
                {
                    list.map((e,i)=>{
                        return (
                            <IconBox key={i} href={e.link} target="_blank" title={`${e.title}로 이동`}>
                                <IconBg style={{ backgroundImage: `url(${e.img})`}}></IconBg>
                                <IconText>{e.title}</IconText>
                            </IconBox>
                        )
                    })
                }
            </IconWrap>
            <TextWrap ref={myRef}>
                <Text>Last Update : {lastUpdate}</Text>
                <Text>ⓒ 2023. MinJeong All Rights Reserved.</Text>            
            </TextWrap>
        </BgWrap>
    </>
  )
}

export default Footer