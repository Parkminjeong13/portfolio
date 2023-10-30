import React from 'react'
import styled from 'styled-components'

const ContentWrap = styled.div`
    padding-left: 100px;
    box-sizing: border-box;
    width: 90%;
    margin: 150px auto;
    @media screen and (max-width: 1024px){
        width: 95%;
    }
    @media screen and (max-width: 640px){
        width: 80%;
        padding-left: 0;
    }
`
// const Icon = styled.div`
//     background: url("./images/book.png")center center no-repeat;
//     width: 100%; height: 100px;
// `
// const LogoBg = styled.div`
//     background: url("./images/logo.png")center center no-repeat;
//     width: 100%; height: 700px;
//     margin: 0 auto;
//     filter: blur(10px);
// `
// const LogoWrap = styled.div`
//     display: grid;
//     width: 10%;
//     grid-template-columns: repeat(3, 1fr);
//     border: 2px solid #d12e2e;
//     padding: 10px 0;
//     box-shadow: 0 0 0 1px #d12e2e;
//     margin: 0 auto;
// `
// const Logo = styled.div`
//     aspect-ratio: 1 / 1;
//     box-shadow: 0 0 0 1px #d12e2e;
//     font-size: 1.5vw;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `
const Name = styled.div`    
    width: 75%;
    margin: 0 auto;
    display: flex;
    span{
        width: 10%;
        margin-left: auto;
        border-bottom: 2px solid #d12e2e;
        font-size: 27px;
        text-align: right;
    }
    @media screen and (max-width: 1024px){        
        span{
            font-size: 20px;
            width: 15%;
        }
    }
    @media screen and (max-width: 640px){
        width: 90%;
        span{
            font-size: 16px;
            width: 20%;
        }
    }
`
const GridContainer = styled.div`
    display: grid;
    width: 75%;
    margin: 20px auto 100px;
    grid-template-columns: repeat(20, 1fr);
    grid-row-gap: 1vw;
    text-align: center;
    background-color: #fff;
    border: 2px solid #d12e2e;
    padding: 1.5% 0;
    box-shadow: 0 0 0 1px #d12e2e;
    @media screen and (max-width: 1024px){
        width: 80%;
        grid-template-columns: repeat(15, 1fr);
        overflow: hidden;
    }
    @media screen and (max-width: 640px){
        width: 90%;
        grid-template-columns: repeat(10, 1fr);
    }
`
const GridItem = styled.div`
    aspect-ratio: 1 / 1;
    /* border: 1px solid #d12e2e; */
    box-shadow: 0 0 0 1px #d12e2e;
    font-size: 1.7vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1024px){
        font-size: 3vw;
        &:nth-child(n+151){
            display: none;
        }
    }
    @media screen and (max-width: 640px){
        font-size: 4vw;
        &:nth-child(n+101){
            display: none;
        }
    }
`
function Manuscript() {
    const rows = Array.from({length:10});
    const columns = Array.from({length:20});
    const textContent = [
        { letters: "document.textContent".split(""), startRow: 0, startColumn: 0},
        { letters: `="min jeong"`.split(""), startRow: 2, startColumn: 8}
    ]
  return (
    <>
        <ContentWrap>
            <Name>
                <span>ㅁㅈ</span>
            </Name>
            <GridContainer>
                {rows.map((_, rowIndex) =>
                    columns.map((_, colIndex) => {                        
                        let content = "";
                        textContent.map(item => {
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
            </GridContainer>
        </ContentWrap>
    </>
  )
}

export default Manuscript