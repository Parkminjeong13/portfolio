import React from 'react'
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
const TextWrap = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Text = styled.div`
    font-size: 14px;
`
function Footer({myRef}) {
  return (
    <>
        <BgWrap>
                  
        </BgWrap>
        <TextWrap ref={myRef}>
          <Text>ⓒ 2023. MinJeong All Rights Reserved.</Text>
        </TextWrap>
    </>
  )
}

export default Footer