import React, { useState } from 'react'
import styled from 'styled-components'
import { data } from '../data/data'

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
const TopBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
`
const CategoryWrap = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3%;
`
const Category = styled.div`
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    &.on{
      background-color: #eee;
    }
    @media screen and (max-width: 640px){
        display: none;
    }
`
const ListbtnWrap = styled.div`
    display: flex;
    margin: 50px 0;
    @media screen and (max-width: 640px){
        display: none;
    }
`
const Horizontal = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer; 
    background: url("./images/list.png")center center no-repeat;
    background-color: ${props => props.$isVertical ? "#ddd" : '#fff'};
`
const Vertical = styled(Horizontal)`
    background: url("./images/vertical.png")center center no-repeat;
    background-color: ${props => props.$isVertical ? "#ddd" : '#fff'};
`
const CardWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
`
const Card = styled.div`
    display: flex;
    flex-direction: ${props => props.$isVertical ? "column" : 'row'};   
    flex-basis: ${props => props.$isVertical ? '32%' : '100%'};
    border: 1px solid #ddd;
    text-align: center;
    margin-bottom: 50px;
    box-sizing: border-box;
    @media screen and (max-width: 1024px){
        flex-basis: ${props => props.$isVertical ? "48%" : '100%'};
    }
    @media screen and (max-width: 640px){
        flex-direction: column;
        flex-basis: 100%
    }
`
const ContentImg = styled.div`
  width: ${props => props.$isVertical ? '100%' : '45%'};
  aspect-ratio: 3 / 2;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  order: ${props => props.$isVertical ? '1' : (props.$index % 2 === 0 ? '2' : '1')};
  cursor: pointer;
  @media screen and (max-width: 1024px){
      
  }
  @media screen and (max-width: 640px){
      order: 1;
      width: 100%;
  }
`
const Desc = styled.div`
  padding: ${props => props.$isVertical ? '30px' : '70px 50px'};
  width: ${props => props.$isVertical ? '' : '45%'};
  order: ${props => props.$isVertical ? '2' : (props.$index %2 ===0 ? '1' : '2')};
  margin: 20px auto;
  position: relative;
  h3{margin-bottom: 30px;}
  p{
    margin-top: 15px;
    span{
      font-weight: bold;
    }
  }
  @media screen and (max-width: 1024px){
      padding: ${props => props.$isVertical ? '30px' : '25px'};
  }
  @media screen and (max-width: 640px){
      order: 2;
      width: 80%;
      margin: 0 auto;
      padding: 30px 30px;
  }
`
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`
const View = styled.a`
  margin: 20px 10px;
  padding: 10px;
  background-color: #eee;
  border-radius: 5px;
  &:hover{background-color: #ddd;}
`
const Git = styled(View)``
function Portfolio({myRef}) {

  const [isVertical, setIsVertical] = useState(true);
  const [selected, setSelected] = useState('All');

  const listType = ["All", "TeamProject", "Clone", "Webapp"]

  const FilterData = data && data.filter(e =>{
    return selected === "All" || selected === e.type
  })
  
  return (
    <>
      <BgWrap ref={myRef}>
        <TopBox>
          <CategoryWrap>
            {listType.map((e,i)=>{
              return (
                <Category key={i} onClick={()=>setSelected(e)} className={selected === e && 'on'}>{e}</Category>
              )
            })}
          </CategoryWrap>
          <ListbtnWrap>
            <Horizontal title={"가로"} onClick={()=>{setIsVertical(false)}} $isVertical={!isVertical}>
            </Horizontal>
            <Vertical title={"세로"} onClick={()=>{setIsVertical(true)}} $isVertical={isVertical}>
            </Vertical>
          </ListbtnWrap>
        </TopBox>
        <CardWrap >
          {
            FilterData.map((e, i) => {
              return (
                <Card key={i} $isVertical={isVertical}>
                  <ContentImg $index={i} $isVertical={isVertical} style={{backgroundImage: `url(${e.img})`}} />
                  <Desc $index={i} $isVertical={isVertical}>
                    <h3>{e.title}</h3>
                    <p>{e.desc}</p>
                    <p><span>소요기간 : </span>{e.period}</p>
                    <p><span>기여도 : </span>{e.contribution}</p>
                    <p><span>스킬 : </span>{e.skill}</p>
                    <BtnWrap>
                      <View href={e.view} target="_blank">view</View>
                      <Git href={e.git} target="_blank">GitHub</Git>
                    </BtnWrap>
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