import React, { useState } from 'react'
import styled from 'styled-components'
import { data } from '../data/data'

const BgWrap = styled.div`
    padding-left: 100px;
    width: 90%;
    box-sizing: border-box;
    margin: 200px auto;
    @media screen and (max-width: 1024px){
        width: 95%;
    }
    @media screen and (max-width: 767px){
        width: 80%;
        padding-left: 0;
        margin: 0 auto;
    }
`
const Title = styled.h3`
    font-size: 36px;
    text-align: center;
    padding-top: 50px;
    @media screen and (max-width: 767px){
        padding-top: 100px;
    }
`
const TopBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
    flex-wrap: wrap;
    transform: translateX(0);
    @media screen and (max-width: 767px){
        margin: 0;
        transform: translateX(-1000px);
    }
`
const CategoryWrap = styled.div`
    display: flex;
    /* justify-content: space-between; */
    /* margin-right: 3%; */
`
const Category = styled.div`
    border: 1px solid #ddd;
    padding: 10px;
    cursor: pointer;
    border-radius: 4px;
    background: #888;
    text-align: center;
    z-index: 10;
    /* transition: 0.3s; */
    cursor: pointer;
    color: #fff;
    flex-shrink: 0;
    font-size: 16px;
    margin-right: 15px;
    &:hover{background: #808080;}
    &.on{
        box-shadow: 0px 1px 5px 2px #BFCEEF;
        background-color: #E35252;
    }
    @media screen and (max-width: 1024px){
        font-size: 14px;
        margin-right: 10px;
    }
`
const ListbtnWrap = styled.div`
    display: flex;
    margin: 50px 0;
    @media screen and (max-width: 767px){
        margin: 0;
    }
`
const Horizontal = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer; 
    background: url("./images/list.png")center center no-repeat;
    background-color: ${props => props.$isVertical ? "#eee" : '#fff'};
    box-shadow: 0px 1px 5px 2px #ddd;
    @media screen and (max-width: 1024px){
        width: 30px;
        height: 30px;
    }
`
const Vertical = styled(Horizontal)`
    background: url("./images/vertical.png")center center no-repeat;
    background-color: ${props => props.$isVertical ? "#eee" : '#fff'};
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
    position: ${props => props.$isVertical ? 'relative' : ''};
    padding-bottom: ${props => props.$isVertical ? '50px' : ''};
    @media screen and (max-width: 1024px){
        flex-basis: ${props => props.$isVertical ? "48%" : '100%'};
    }
    @media screen and (max-width: 767px){
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
    @media screen and (max-width: 767px){
        order: 1;
        width: 100%;
    }
`
const Desc = styled.div`
    padding: ${props => props.$isVertical ? '30px' : '70px 50px'};
    width: ${props => props.$isVertical ? '' : '45%'};
    order: ${props => props.$isVertical ? '2' : (props.$index %2 ===0 ? '1' : '2')};
    margin: 20px auto;
    position: ${props => props.$isVertical ? '' : 'relative'};
    h3{
        font-size: 32px;
        margin-bottom: 30px;
    }
    p{
        margin-top: 15px;
        span{
        font-weight: bold;
        }
    }
    @media screen and (max-width: 1024px){
        padding: ${props => props.$isVertical ? '30px' : '25px'};
    }
    @media screen and (max-width: 767px){
        order: 2;
        width: 80%;
        margin: 0 auto;
        padding: 30px;
        h3{
            font-size: 24px;
        }
    }
`
const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    position: ${props => props.$isVertical ? 'absolute' : ''};
    bottom: 0; 
    left: ${props => props.$isVertical ? '50%' : ''};
    transform: ${props => props.$isVertical ? 'translateX(-50%)' : ''};
`
const View = styled.a`
    margin: 20px 10px;
    padding: 10px;
    /* background-color: #eee; */
    border-radius: 5px;
    &:hover{background: #D33434;}
    background: rgba(211,52,52,1);
    background: -webkit-linear-gradient(rgba(211,52,52,1) 0%, rgba(200,48,48,1) 100%);
    background: -moz-linear-gradient(rgba(211,52,52,1) 0%, rgba(200,48,48,1) 100%);
    background: -o-linear-gradient(rgba(211,52,52,1) 0%, rgba(200,48,48,1) 100%);
    background: linear-gradient(rgba(211,52,52,1) 0%, rgba(200,48,48,1) 100%);
    box-shadow:0px 4px 0px #C83030;
    color: #fff;
`
const Git = styled(View)`
    &:hover{background: #808080;}
    background: rgba(128,128,128,1);
    background: -webkit-linear-gradient(rgba(128,128,128,1) 0%, rgba(105,105,105,1) 100%);
    background: -moz-linear-gradient(rgba(128,128,128,1) 0%, rgba(105,105,105,1) 100%);
    background: -o-linear-gradient(rgba(128,128,128,1) 0%, rgba(105,105,105,1) 100%);
    background: linear-gradient(rgba(128,128,128,1) 0%, rgba(105,105,105,1) 100%);
    box-shadow:0px 4px 0px #696969;
    color: #fff;
`
function Portfolio({myRef}) {

  const [isVertical, setIsVertical] = useState(true);
  const [selected, setSelected] = useState('All');

  const listType = ["All", "TeamProject", "Clone", "Webapp"]

  const FilterData = data && data.filter(e =>{
    return selected === "All" || selected === e.type
  })

  const countType = listType.map((type, i) => {
    let filtered;
    type === 'All' ? filtered = data : filtered = data.filter(e => e.type === type)
    return `${type} : ${filtered.length}`;
  });
  
    return (
        <>
            <BgWrap ref={myRef}>
                <Title>Portfolio</Title>
                <TopBox>
                    <CategoryWrap>
                        {listType.map((e, i) => {
                            return (
                                <Category key={i} onClick={() => setSelected(e)} className={selected === e && 'on'}> {countType[i]}</Category>
                            )
                        })}
                    </CategoryWrap>
                    <ListbtnWrap>
                        <Horizontal title={"가로"} onClick={() => { setIsVertical(false) }} $isVertical={!isVertical}>
                        </Horizontal>
                        <Vertical title={"세로"} onClick={() => { setIsVertical(true) }} $isVertical={isVertical}>
                        </Vertical>
                    </ListbtnWrap>
                </TopBox>
                <CardWrap >
                    {
                        FilterData.map((e, i) => {
                            return (
                                <Card key={i} $isVertical={isVertical}>
                                    <ContentImg $index={i} $isVertical={isVertical} style={{ backgroundImage: `url(${e.img})` }} />
                                    <Desc $index={i} $isVertical={isVertical}>
                                        <h3>{e.title}</h3>
                                        <p>{e.desc}</p>
                                        <p><span>소요기간 : </span>{e.time}</p>
                                        <p><span>기여도 : </span>{e.contribution}</p>
                                        <p><span>스킬 : </span>{e.skill}</p>
                                        <BtnWrap $isVertical={isVertical}>
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