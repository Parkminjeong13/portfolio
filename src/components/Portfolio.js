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
    &.on{
      background-color: #eee;
    }
`
const ListbtnWrap = styled.div`
    /* width: 100%; */
    display: flex;
    /* justify-content: flex-end; */
    /* margin: 50px 0; */
    @media screen and (max-width: 640px){
        display: none;
    }
`
const Vertical = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer; 
  /* margin-top: 50px; */
  background: url("./images/vertical.png")center center no-repeat;
  &.on{
    background-color: #ddd;
  }
`
const Horizontal = styled(Vertical)`
  background: url("./images/list.png")center center no-repeat;
`
const CardWrap = styled.div`
    display: flex;
    /* justify-content: space-between; */
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
  width: ${props => props.$isVertical ? '100%' : '50%'};
  /* height: ${props => props.$isVertical ? '240px' : '100%'}; */
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
      /* height: 200px; */
  }
`
const Desc = styled.div`
  padding: ${props => props.$isVertical ? '30px' : '70px 50px'};
  width: ${props => props.$isVertical ? '' : '45%'};;
  order: ${props => props.$isVertical ? '2' : (props.$index %2 ===0 ? '1' : '2')};
  margin: 20px auto;
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
const View = styled.div`
  margin: 20px 10px;
  padding: 10px 20px;
  background-color: #eee;
  border-radius: 5px;
`
const Git = styled(View)``
function Portfolio({myRef}) {

  const [isVertical, setIsVertical] = useState(true);
  const [selected, setSelected] = useState('All');

  const category = [
    {
      "type": "All"
    },
    {
      "type": "TeamProject"
    },
    {
      "type": "Clone"
    },
    {
      "type": "ToyProject"
    },
  ]
  
  const data = [
    {
      "img": "./images/teamprojectMain.png",
      "title": "Hello Vanilla",
      "desc": "초보 개발자들이 재미있고 간편하게 바닐라 스크립트를 학습할 수 있도록 지원하는 교육 커뮤니티 플랫폼 사이트입니다. 사용자들의 활발한 소통을 지원하고자 다양한 댓글 기능을 구현하였습니다.",
      "skill": "HTML, CSS, JavaScript, React",
      "contribution": "20%",
      "period": "30일",
      "view": "https://github.com/the02196/hello_vanilla.git",
      "git": "https://github.com/the02196/hello_vanilla.git",
      "type": "TeamProject"      
    },
    {
      "img": "./images/megabox-main.png",
      "title": "Megabox",
      "desc": "Megabox 클론코딩 페이지입니다.",
      "skill": "HTML, CSS, JavaScript",
      "contribution": "100%",
      "period": "14일",
      "view": "https://github.com/Parkminjeong13/megabox.git",
      "git": "https://github.com/Parkminjeong13/megabox.git",
      "type": "Clone"      
    },    
    {
      "img": "./images/parcel.png",
      "title": "Parcel",
      "desc": "택배 조회 페이지입니다. ",
      "skill": "TypeScript, React",
      "contribution": "100%",
      "period": "2일",
      "view": "https://github.com/Parkminjeong13/parcel.git",
      "git": "https://github.com/Parkminjeong13/parcel.git",
      "type": "ToyProject"       
    },
    {
      "img": "./images/subway.png",
      "title": "Subway",
      "desc": "Subway 클론 코딩 페이지입니다.",
      "skill": "HTML, CSS, JavaScript",
      "contribution": "100%",
      "period": "5일",
      "view": "https://github.com/Parkminjeong13/subway.git",
      "git": "https://github.com/Parkminjeong13/subway.git",
      "type": "Clone"       
    },
    {
      "img": "./images/subway.png",
      "title": "Quiz",
      "desc": "Quiz 페이지입니다.",
      "skill": "HTML, CSS, JavaScript",
      "contribution": "100%",
      "period": "3일",
      "view": "https://github.com/Parkminjeong13/quiz.git",
      "git": "https://github.com/Parkminjeong13/quiz.git",
      "type": "ToyProject"       
    },
  ]

  const filteredData = data.filter((item) => {
    if (selected === 'All') {
      return true; // All 카테고리가 선택되었을 때는 모든 데이터를 반환
    }
    return item.type === selected; // 선택된 카테고리와 데이터의 타입이 일치하는 경우만 반환
  });
  return (
    <>
      <BgWrap ref={myRef}>
        <TopBox>
          <CategoryWrap>
            {category.map((e,i)=>{
              return (
                <Category key={i} onClick={() => setSelected(e.type)} className={selected === e.type && 'on'}>{e.type}</Category>
              )
            })}
          </CategoryWrap>
          <ListbtnWrap>
            <Horizontal title={"가로"} className={!isVertical && 'on'} $isVertical={isVertical} onClick={() => { setIsVertical(false) }}>
            </Horizontal>
            <Vertical title={"세로"} className={isVertical && 'on'} onClick={() => {setIsVertical(true)}}>
            </Vertical>
          </ListbtnWrap>
        </TopBox>
        <CardWrap >
          {
            filteredData.map((e, i) => {
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
                      <View>보러가기</View>
                      <Git>GitHub</Git>
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