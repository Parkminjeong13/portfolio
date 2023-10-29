import React from 'react'
import styled from 'styled-components'

const BgWrap = styled.div`
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
        <BgWrap ref={myRef}>
          <Text>ⓒ 2023. MinJeong All Rights Reserved.</Text>
        </BgWrap>
    </>
  )
}

export default Footer