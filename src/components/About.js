import React, { useState } from 'react'
import styled from 'styled-components'
import { skill } from '../data/skilldata'

const ContentWrap = styled.div`
    padding-left: 100px;
    box-sizing: border-box;
    display: flex;
    width: 90%;
    margin: 200px auto;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 1024px){
        width: 95%;
    }
    @media screen and (max-width: 767px){
        width: 80%;
        padding-left: 0;
        margin: 0 auto;
    }
`
const Picture = styled.div`
    background: url("./images/portrait.jpg")center center no-repeat;
    background-size: contain;
    flex-basis: 30%;
    aspect-ratio: 1 / 1;
    @media screen and (max-width: 1024px){
        flex-basis : 50%;
        /* height: 360px; */
        margin: 0 auto;
    }
    @media screen and (max-width: 767px){
        flex-basis: 50%;
    }
`
const DescWrap = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-basis: 60%;
    margin: 0 auto;
    @media screen and (max-width: 1024px){
        flex-basis: 100%;
        margin: 50px auto;
    }
    @media screen and (max-width: 767px){
        text-align: center;
        margin: 0 auto;
    }
`
const Title = styled.div`
    margin: 70px 0 20px;
    h3{
        font-size: 36px;
        margin-bottom: 15px;
    }
    p{
        font-size: 18px;
        margin-bottom: 15px;
    }
`
const SkillWrap = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 1.5%;
    @media screen and (max-width: 767px){
        gap: 2%;
    }
`
const Skill = styled.li`
    width: 60px; 
    aspect-ratio: 1 / 1;
    border: 1px solid #ddd;
    box-sizing: border-box;
    margin-bottom: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${props => props.$isActive ? "#fff" : '#000'};
    div{
        width: 40px; height: 40px;
    }
    span{font-size: 10px;}
    @media screen and (max-width: 1024px){
        div{width: 35px; height: 35px;}
    }
    @media screen and (max-width: 767px){
        div{width: 32px; height: 32px;}
    }
`
const Desc = styled(Title)`
    color: #aaa;
    height: 40px;
    margin: 15px 0;
    @media screen and (max-width: 767px){
        height: 70px;
    }
`
const Education = styled(Title)``
function About({myRef}) {
    
    const [isActive, setIsActive] = useState(0);

  return (
    <>
        <ContentWrap ref={myRef}>
            <Picture />
            <DescWrap>
                <Title>
                    <h3>About</h3>
                    <p>"언어를 사랑하는 프론트엔드 개발자 박민정입니다."</p>
                </Title>
                <SkillWrap>
                    {skill.map((e,i)=>{
                        return (                      
                            <Skill key={i} onMouseOver={()=>{setIsActive(i)}} style={{background: isActive === i ? 'linear-gradient(to top, #FFD84B 20%, transparent 40%)' : '#fff'}}>
                                <div style={{ backgroundImage: `url(${e.img})`, backgroundSize: 'cover' }}></div>
                                <span>{e.title}</span>
                            </Skill> 
                        )
                    })}
                </SkillWrap>                
                <Desc>
                    <p>
                        {isActive !== -1 && skill[isActive].desc}
                    </p>
                </Desc>
                <Education>
                    <h3>Education</h3>
                    <p>2023.06.29~2023.11.30</p>
                    <p>(혼합+디지털컨버전스) React를 활용한 프론트엔드 개발자 양성(SPA 프로젝트 개발) A (900시간)</p>
                </Education>
            </DescWrap>
        </ContentWrap>
    </>
  )
}

export default About