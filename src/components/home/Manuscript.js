import React from 'react'
import styled from 'styled-components'

const ContentWrap = styled.div`
    padding-left: 120px;
    position: relative;
    width: 1000px;
    margin: 0 auto;
    @media screen and (max-width: 1024px){
        width: 90%;
    }
    @media screen and (max-width: 640px){
        width: 90%;
    }
`
const Icon = styled.div`
    background: url("./images/book.png")center center no-repeat;
    width: 100%; height: 100px;
`
const LogoBg = styled.div`
    background: url("./images/logo.png")center center no-repeat;
    width: 100%; height: 700px;
    margin: 0 auto;
`
const GridContainer = styled.div`
    display: grid;
    width: 900px;
    margin: -100px auto 0;
    grid-template-rows: repeat(10, 42px);
    grid-template-columns: repeat(20, 42px);
    grid-row-gap: 10px;
    font-size: 30px;
    text-align: center;
    background-color: #fff;
    position: relative;
    @media screen and (max-width: 1024px){
        width: 525px;
        height: 350px;
        font-size: 24px;
        grid-template-rows: repeat(10, 35px);
        grid-template-columns: repeat(15, 35px);
        overflow: hidden;
    }
    @media screen and (max-width: 640px){
        margin: -200px auto 0;
        width: 300px;
        font-size: 16px;
        grid-template-rows: repeat(20, 30px);
        grid-template-columns: repeat(10, 30px);
    }
`
const GridItem = styled.div`
    aspect-ratio: 1 / 1;
    border: 1px solid #ddd;
`
const Circle = styled.div`
    background-color: #fff;
    box-shadow: 0 0 7px #fff, 0 0 10px #eee, 0 0 21px #fff;
    border-radius: 50%;
    width: 100px; height: 100px;
    left: 80%; top: 80%;
    position: absolute;
    filter:blur(1.5px);
    @media screen and (max-width: 1024px){
        width: 70px; height: 70px;
    }
    @media screen and (max-width: 640px){
        width: 40px; height: 40px;
    }
`
const CircleBig = styled(Circle)`
    width: 140px; height: 140px;
    left: 0; top: 40%;
    @media screen and (max-width: 1024px){
        width: 100px; height: 100px;
    }
    @media screen and (max-width: 640px){
        width: 50px; height: 50px;
    }
`
function Manuscript() {

    const rows = Array.from({length:10});
    const columns = Array.from({length:20});
    const textContent = [
        { letters: "document.textContent".split(""), startRow: 0, startColumn: 0},
        { letters: `="min jeong"`.split(""), startRow: 2, startColumn: 7}
    ]
  return (
    <>
        <ContentWrap>
            <Icon />
            <LogoBg />
            <GridContainer>
                {rows.map((_, rowIndex) =>
                    columns.map((_, colIndex) => {
                        let content = "";
                        textContent.forEach(item => {
                            if (rowIndex === item.startRow && colIndex >= item.startColumn 
                                && colIndex < item.startColumn + item.letters.length) {
                                content = item.letters[colIndex - item.startColumn];
                            }
                        });
                        return (
                            <GridItem key={`${rowIndex}-${colIndex}`}>
                                {content}
                            </GridItem>
                        )
                    })
                )}
                <Circle />
                {/* <Circle style={{ top: '60%', left: '-5%', width: '150px', height: '150px' }}/> */}
                <CircleBig />
            </GridContainer>
        </ContentWrap>
    </>
  )
}

export default Manuscript