import React, { useState } from 'react'
import styled from 'styled-components'

const ContentWrap = styled.div`
    display: flex;
    width: 1200px;
    margin: 100px auto;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 1024px){
      width: 90%;
    }
`
const Picture = styled.div`
    background: url("https://via.placeholder.com/600");
    flex-basis: 35%;
    @media screen and (max-width: 1024px){
        flex-basis: 100%;
        height: 400px;
        margin: 0 auto;
    }
    @media screen and (max-width: 640px){
        flex-basis: 100%;
    }
`
const DescWrap = styled.div`
    flex-basis: 55%;
    @media screen and (max-width: 1024px){
        margin: 0 auto;
    }
    @media screen and (max-width: 640px){
        width: 360px;
        margin: 50px auto;
    }
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
    @media screen and (max-width: 1024px){
        text-align: center;
        h3{
            font-size: 30px;
        }
        p{
            font-size: 18px;
        }
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
    cursor: pointer;
    div{
        width: 40px; height: 40px;
    }
    span{font-size: 14px;}
    @media screen and (max-width: 1024px){
      
    }
    @media screen and (max-width: 640px){
      width: 90px;
    }
`
const Desc = styled.div`
    font-size: 20px;
    color: #aaa;
    margin-top: 20px;
    height: 70px;
    @media screen and (max-width: 1024px){
        font-size: 16px;
    }
`
const Education = styled.div`
    margin: 20px 0;
    h3{font-size: 40px; margin: 30px 0;}
    p{margin-bottom: 10px;}
`
function About() {
    
    const [isActive, setIsActive] = useState(0);

    const skill = [
        {
            "img": "./images/icons/html.png",
            "title": "html",
            "desc": "웹 페이지의 레이아웃 설정, 콘텐츠 삽입, 하이퍼링크 생성, 폼 생성"
        },
        {
            "img": "./images/icons/css.png",
            "title": "css",
            "desc": "스타일 지정, 레이아웃 조정, 애니메이션 추가"
        },
        {
            "img": "./images/icons/javascript.png",
            "title": "javascript",
            "desc": "동적 인터랙션 제공 : 버튼 클릭 시 팝업창 나타내기나 드롭다운 메뉴 구현 같은 동적 인터랙션이 가능합니다."
        },
        {
            "img": "./images/icons/react.png",
            "title": "react",
            "desc": "react 설명"
        },
        {
            "img": "./images/icons/github.png",
            "title": "git",
            "desc": "git 설명"
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
                                <Skill key={i} onClick={()=>{setIsActive(i)}}>
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
                <Education>
                    <h3>Education</h3>
                    <p>(혼합+디지털컨버전스) React를 활용한 프론트엔드 개발자 양성(SPA 프로젝트 개발) A</p>
                    <span>2023.06.29~</span>
                </Education>
            </DescWrap>
        </ContentWrap>
    </>
  )
}

export default About