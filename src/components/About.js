import React, { useState } from 'react'
import styled from 'styled-components'

const ContentWrap = styled.div`
    display: flex;
    width: 1200px;
    margin: 100px auto;
    justify-content: space-between;
`
const Picture = styled.div`
    background: url("https://via.placeholder.com/400x600");
    width: 400px;
    height: 600px;
`
const DescWrap = styled.div`
    width: 700px;
`
const Title = styled.div`
    h3{
        font-size: 40px;
        margin-bottom: 30px;
    }
    p{
        font-size: 24px;
        margin-bottom: 30px;
    }
`
const SkillWrap = styled.ul`
    display: flex;
`
const Skill = styled.li`
    width: 70px; height: 70px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    margin-right: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
        width: 40px; height: 40px;
    }
    span{font-size: 14px;}
`
const Desc = styled.div`
    font-size: 20px;
    color: #aaa;
    margin-top: 20px;
`
function About() {
    
    const [isActive, setIsActive] = useState(-1);

    const skill = [
        {
            "img": "./images/icons/html.png",
            "title": "html",
            "desc": "html 설명"
        },
        {
            "img": "./images/icons/css.png",
            "title": "css",
            "desc": "css 설명"
        },
        {
            "img": "./images/icons/javascript.png",
            "title": "javascript",
            "desc": "javascript 설명"
        },
        {
            "img": "./images/icons/react.png",
            "title": "react",
            "desc": "react 설명"
        }
    ]
  return (
    <>
        <ContentWrap>
            <Picture />
            <DescWrap>
                <Title>
                    <h3>민정</h3>
                    <p>"언어를 사랑하는 개발자 박민정입니다."</p>
                </Title>
                <SkillWrap>
                    {skill.map((e,i)=>{
                        return (
                            <>                            
                                <Skill onClick={()=>{setIsActive(i)}}>
                                    <div style={{ backgroundImage: `url(${e.img})`, backgroundSize: 'cover' }}></div>
                                    <span>{e.title}</span>
                                </Skill>                                
                            </>
                        )
                    })}
                </SkillWrap>                
                <Desc>
                    {isActive !== -1 && skill[isActive].desc}
                </Desc>
            </DescWrap>
        </ContentWrap>
    </>
  )
}

export default About