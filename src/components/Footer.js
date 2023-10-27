import React from 'react'
import styled from 'styled-components'

const BgWrap = styled.div`
    width: 100%;
    height: 50px;
    background-color: #aaa;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Text = styled.div`
    color: #eee;
`
function Footer({myRef}) {
  return (
    <>
        <BgWrap ref={myRef}>
          <Text>ⓒ 2023. minjeong all rights reserved.</Text>
        </BgWrap>
    </>
  )
}

export default Footer