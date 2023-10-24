import React, { useState } from 'react'
import styled from 'styled-components'

const BgWrap = styled.div`
    padding-left: 120px;
    box-sizing: border-box;
    width: 1000px;
    margin: 50px auto;
    @media screen and (max-width: 1024px){
        width: 90%;
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
    margin-bottom: 30px;
    @media screen and (max-width: 1024px){
        flex-direction: ${props => props.$isVertical ? "column" : 'row'};
        flex-basis: ${props => props.$isVertical ? "49%" : '100%'};
    }
    @media screen and (max-width: 640px){
        flex-direction: column;
        flex-basis: 100%
    }
`
const ContentImg = styled.div`
  width: ${props => props.$isVertical ? '100%' : '50%'};
  height: 220px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  order: ${props => props.$isVertical ? '1' : (props.index % 2 === 0 ? '2' : '1')};
  @media screen and (max-width: 1024px){
      /* order: ${props => props.index % 2 === 0 ? '1' : '2'}; */
      /* width: 50%; */
  }
  @media screen and (max-width: 640px){
      order: 1;
      width: 100%;
  }
`
const Desc = styled.div`
  padding: 50px;
  width: ${props => !props.$isVertical && '50%'};
  h3{margin-bottom: 20px}
  order: ${props => props.$isVertical ? '2' : (props.index %2 ===0 ? '1' : '2')};
  @media screen and (max-width: 1024px){
      /* order:${props => props.index %2 ===0 ? '2' : '1'}; */
      /* width: 50%; */
  }
  @media screen and (max-width: 640px){
      order: 2;
      margin: 0 auto;
  }
`
function Portfolio() {

  const [isVertical, setIsVertical] = useState(true);
  const [isClick, setIsClick] = useState(-1);
  const data = [
    {
      "img": "./images/teamprojectMain.png",
      "title": "Hello Vanilla",
      "desc": "Team Project 사이트입니다.",
      "skill": "html/css/javascript/react",
      "contribution": "20%",
      "period": "30일",
      "type": "teamproject"      
    },
    {
      "img": "./images/megabox-main.png",
      "title": "Megabox",
      "desc": "Megabox 클론코딩 사이트입니다.",
      "skill": "html/css/javascript",
      "contribution": "100%",
      "period": "14일"      
    },    
    {
      "img": "./images/parcel.png",
      "title": "Parcel",
      "desc": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "skill": "html/css/javascript",
      "contribution": "100%",
      "period": "1일"       
    },
  ]
  return (
    <>
        <BgWrap>
            <ListbtnWrap>
              <Horizontal className={!isVertical && 'on'} $isVertical={isVertical} onClick={()=>{setIsVertical(false)}}>
                <div></div>
                <div></div>
              </Horizontal>
              <Vertical className={isVertical && 'on'}onClick={()=>{setIsVertical(true)}}>
                <div></div>
                <div></div>
              </Vertical>
            </ListbtnWrap>
            <CardWrap>
              {
                data.map((e,i)=>{
                  return (
                    <Card key={i} $isVertical={isVertical}>
                      <ContentImg index={i} $isVertical={isVertical} style={{ backgroundImage: `url(${e.img})`}}/>
                      <Desc index={i} $isVertical={isVertical}>
                        <h3>{e.title}</h3>
                        <p>{e.desc}</p>
                        <p>소요기간 : {e.period}</p>
                        <p>기여도 : {e.contribution}</p>
                        <p>스킬 : {e.skill}</p>
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