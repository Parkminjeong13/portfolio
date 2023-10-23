import React from 'react'
import styled from 'styled-components'

const BgWrap = styled.div`
    width: 1200px;
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
`
const Horizontal = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  div{width: 10px; height: 30px; background-color: #000;}
  div{width: 10px; height: 30px; background-color: #000;}
`
const Vertical = styled(Horizontal)`
  flex-direction: column;
  div{width: 30px; height: 10px; background-color: #000;}
  div{width: 30px; height: 10px; background-color: #000;}
`
const CardWrap = styled.div`
    /* flex-basis: 90%; */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const Card = styled.div`    
    flex-basis: 32.5%;
    border: 1px solid #ddd;
    text-align: center;
    margin-bottom: 30px;
    @media screen and (max-width: 1024px){
        flex-basis: 49%
    }
    @media screen and (max-width: 640px){
        flex-basis: 100%
    }
`
const ContentImg = styled.div`
  width: 100%;
  height: 220px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`
const Desc = styled.div`
  padding: 50px;
  h3{margin-bottom: 20px}
`
function Portfolio() {

  const data = [
    {
      "img": "./images/megabox-main.png",
      "title": "Megabox",
      "desc": "Megabox 클론코딩 사이트입니다.",
      "skill": "html/css/javascript",
      "contribution": "100%",
      "period": "2주"      
    },
    {
      "img": "./images/teamprojectMain.png",
      "title": "Hello Vanilla",
      "desc": "Team Project 사이트입니다."      
    },
    {
      "img": "./images/parcel.png",
      "title": "Parcel",
      "desc": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."      
    },
  ]
  return (
    <>
        <BgWrap>
            <ListbtnWrap>
              <Horizontal>
                <div></div>
                <div></div>
              </Horizontal>
              <Vertical>
                <div></div>
                <div></div>
              </Vertical>
            </ListbtnWrap>
            <CardWrap>
              {
                data.map((e,i)=>{
                  return (
                    <Card key={i}>
                      <ContentImg style={{ backgroundImage: `url(${e.img})`  }}/>
                      <Desc>
                        <h3>{e.title}</h3>
                        <p>{e.desc}</p>
                        <p>소요기간 : {e.period}</p>
                        <p>기간 : {e.contribution}</p>
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