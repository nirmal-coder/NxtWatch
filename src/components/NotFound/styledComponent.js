import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }
  h1 {
    font-size: 16px;
  }
  p {
    font-size: 10px;
  }
`
export default Container
