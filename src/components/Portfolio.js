import React, { useState } from 'react'
import styled from 'styled-components'

const BgWrap = styled.div`
    padding-left: 100px;
    width: 90%;
    box-sizing: border-box;
    margin: 50px auto;
    @media screen and (max-width: 1024px){
        width: 95%;
    }
    @media screen and (max-width: 640px){
        width: 80%;
        padding-left: 0;
    }
`
const ListbtnWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 30px;
    @media screen and (max-width: 640px){
        display: none;
    }
`
const Vertical = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &.on{
    background-color: #ddd;
    & div{
      background-color: #333;
    }
  }
  div{width: 10px; height: 30px; background-color: #333;}
`
const Horizontal = styled(Vertical)`
  flex-direction: column;
  div{width: 30px; height: 10px;}
`
const CardWrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const Card = styled.div`
    display: flex;
    flex-direction: ${props => props.$isVertical ? "column" : 'row'};   
    flex-basis: ${props => props.$isVertical ? '32.5%' : '100%'};
    border: 1px solid #ddd;
    text-align: center;
    margin-bottom: 50px;
    box-sizing: border-box;
    @media screen and (max-width: 1024px){
        flex-direction: ${props => props.$isVertical ? "column" : 'row'};
        flex-basis: ${props => props.$isVertical ? "48%" : '100%'};
    }
    @media screen and (max-width: 640px){
        flex-direction: column;
        flex-basis: 100%
    }
`
const ContentImg = styled.div`
  width: ${props => props.$isVertical ? '100%' : '50%'};
  height: ${props => props.$isVertical ? '240px' : '100%'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  order: ${props => props.$isVertical ? '1' : (props.$index % 2 === 0 ? '2' : '1')};
  @media screen and (max-width: 1024px){
      
  }
  @media screen and (max-width: 640px){
      order: 1;
      width: 100%;
      height: 200px;
  }
`
const Desc = styled.div`
  padding: ${props => props.$isVertical ? '30px' : '70px 50px'};
  width: ${props => !props.$isVertical && '50%'};
  order: ${props => props.$isVertical ? '2' : (props.$index %2 ===0 ? '1' : '2')};
  margin: 20px auto;
  h3{margin-bottom: 30px;}
  p{
    margin-top: 15px;
    font-weight: bold;
    span{
      font-weight: normal;
    }
  }
  @media screen and (max-width: 1024px){
      padding: 50px 30px;
  }
  @media screen and (max-width: 640px){
      order: 2;
      margin: 0 auto;
      padding: 50px 30px;
  }
`
function Portfolio({myRef}) {

  const [isVertical, setIsVertical] = useState(true);
  const [isClick, setIsClick] = useState(-1);

  
  const data = [
    {
      "img": "./images/teamprojectMain.png",
      "title": "Hello Vanilla",
      "desc": "초보 개발자들이 재미있고 간편하게 바닐라 스크립트를 학습할 수 있도록 지원하는 교육 커뮤니티 플랫폼입니다. 초기에는 바닐라 자바스크립트만을 사용해 모든 페이지를 만드려고 했으나, React를 배우게 되면서 라이브러리를 사용해 개발했습니다. 사용자들의 활발한 소통을 지원하고자 다양한 댓글 기능을 구현하였습니다. ",
      "skill": "HTML, CSS, JavaScript, React",
      "contribution": "20%",
      "period": "30일",
      "type": "teamproject"      
    },
    {
      "img": "./images/megabox-main.png",
      "title": "Megabox",
      "desc": "Megabox 클론코딩 페이지입니다. 원본 페이지는 float으로 구현되어 있어, flex로 변경하여 구현하였습니다. ",
      "skill": "HTML, CSS, JavaScript",
      "contribution": "100%",
      "period": "14일",
      "type": "clone"      
    },    
    {
      "img": "./images/parcel.png",
      "title": "Parcel",
      "desc": "택배 배송 조회 페이지입니다. ",
      "skill": "HTML, CSS, JavaScript, React",
      "contribution": "100%",
      "period": "1일",
      "type": "React"       
    },
    {
      "img": "./images/subway.png",
      "title": "Subway",
      "desc": "Subway 클론 코딩 페이지입니다.",
      "skill": "HTML, CSS, JavaScript",
      "contribution": "100%",
      "period": "1일",
      "type": "clone"       
    },
  ]
  return (
    <>
        <BgWrap ref={myRef}>
            <ListbtnWrap>
              <Horizontal title={"가로"} className={!isVertical && 'on'} $isVertical={isVertical} onClick={()=>{setIsVertical(false)}}>
                <div></div>
                <div></div>
              </Horizontal>
              <Vertical title={"세로"} className={isVertical && 'on'}onClick={()=>{setIsVertical(true)}}>
                <div></div>
                <div></div>
              </Vertical>
            </ListbtnWrap>
            <CardWrap>
              {
                data.map((e,i)=>{
                  return (
                    <Card key={i} $isVertical={isVertical}>
                      <ContentImg $index={i} $isVertical={isVertical} style={{ backgroundImage: `url(${e.img})`}}/>
                      <Desc $index={i} $isVertical={isVertical}>
                        <h3>{e.title}</h3>
                        <span>{e.desc}</span>
                        <p>소요기간 : <span>{e.period}</span></p>
                        <p>기여도 : <span>{e.contribution}</span></p>
                        <p>스킬 : <span>{e.skill}</span></p>
                      </Desc>
                    </Card>
                  )
                })
              }
            </CardWrap>
        </BgWrap>
    </>
  )
}

export default Portfolio