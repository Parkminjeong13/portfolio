import React, { useState } from 'react'
import styled from 'styled-components'
import { skill } from '../data/skilldata'


const ContentWrap = styled.div`
    padding-left: 100px;
    box-sizing: border-box;
    display: flex;
    width: 90%;
    margin: 150px auto;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 1024px){
        width: 95%;
    }
    @media screen and (max-width: 640px){
        width: 80%;
        padding-left: 0;
    }
`
const Picture = styled.div`
    background: url("./images/sketch.png")center center no-repeat;
    background-size: contain;
    flex-basis: 50%;
    @media screen and (max-width: 1024px){
        flex-basis : 70%;
        height: 400px;
        margin: 30px auto;
    }
    @media screen and (max-width: 640px){
        flex-basis: 60%;
    }
`
const DescWrap = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-basis: 50%;
    margin: 0 auto;
    @media screen and (max-width: 1024px){
        flex-basis: 100%;
        margin: 50px auto;
    }
    @media screen and (max-width: 640px){
        text-align: center;
    }
`
const Title = styled.div`
    margin: 70px 0 20px;
    h3{
        font-size: 32px;
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
    gap: 5px;
    @media screen and (max-width: 640px){
        gap: 2%;
    }
`
const Skill = styled.li`
    width: 55px; 
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
    div{
        width: 32px; height: 32px;
    }
    span{font-size: 12px;}
    @media screen and (max-width: 1024px){
        width: 60px; height: 60px;
        div{width: 35px; height: 35px;}
        span{font-size: 13px;}
    }
    @media screen and (max-width: 640px){
        width: 50px; height: 50px;
        div{width: 30px; height: 30px;}
        span{font-size: 10px;}
    }
`
const Desc = styled(Title)`
    color: #aaa;
    height: 40px;
    margin: 15px 0;
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
                    <p>"언어를 사랑하는 개발자 박민정입니다."</p>
                </Title>
                <SkillWrap>
                    {skill.map((e,i)=>{
                        return (                      
                            <Skill key={i} onClick={()=>{setIsActive(i)}}>
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
                    <p>(혼합+디지털컨버전스) React를 활용한 프론트엔드 개발자 양성(SPA 프로젝트 개발) A</p>
                </Education>
            </DescWrap>
        </ContentWrap>
    </>
  )
}

export default About