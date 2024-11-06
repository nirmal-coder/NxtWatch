import styled from 'styled-components'

const bgColorLight = '#f9f9f9'
const bgColorDark = '#0f0f0f'

const primaryColorLight = '#181818'
const primaryColorDark = '#f8fafc'

const secondaryColorLight = '#475569'
const secondaryColorDark = '#64748b'

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  background-color: ${props => (props.isDark ? bgColorDark : bgColorLight)};
`

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.isDark ? bgColorDark : bgColorLight)};
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin-left: 20%;
    padding: 20px 50px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 85vh;
`

export const VideosListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  min-height: 85vh;
  h1 {
    font-size: 16px;
    color: ${props => (props.isDark ? primaryColorDark : primaryColorLight)};
    align-self: flex-start;
    @media screen and (min-width: 768px) {
      font-size: 32px;
    }
  }
  p {
    color: ${props =>
      props.isDark ? secondaryColorDark : secondaryColorLight};
  }
  hr {
    width: 100%;
  }
`
export const FailureFetchContainer = styled.div`
    width:100%;
    min-height:85vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-left:0px;

    img{
        width:50%;
        height:50%;
    }
    h1{
        color:${props => (props.isDark ? ' #f9f9f9' : ' #181818')};
    }
    p{
        color:${props => (props.isDark ? ' #94a3b8' : '#475569')};
        font-size:13px;
        font-weight:400;
    
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #fff;
  padding: 8px 16px;
  border: 0px;
  border-radius: 6px;
`

export const VideoPlayerContainer = styled.div`
  width: 90vw;
  height: calc((90vw / 16) * 9);
  @media screen and (min-width: 768px) {
    width: 60vw;
    height: calc((60vw / 16) * 8);
  }
`
export const ViewsAndLikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  hr {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const ViewsContainer = styled.div`
  display: flex;
  align-self: flex-start;

  p {
    color: ${props =>
      props.isDark ? secondaryColorDark : secondaryColorLight};
    font-size: 14px;
    font-weight: 500;
  }
`
export const LikesContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  background-color: transparent;
  border: 0px;
  font-size: 18px;
  margin-right: 3px;
  color: ${props => {
    if (props.isSelected) {
      return '#2563eb'
    }
    if (props.isDark) {
      return '#64748b'
    }
    return '#64748b'
  }};
  p {
    color: ${props => {
      if (props.isSelected) {
        return '#3b82f6'
      }
      if (props.isDark) {
        return secondaryColorDark
      }
      return primaryColorLight
    }};
    font-size: 14px;
    font-weight: 500;
    margin-left: 3px;
  }
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  img {
    width: 40px;
    margin-right: 10px;
  }

  p:nth-of-type(1) {
    color: ${props => (props.isDark ? primaryColorDark : primaryColorLight)};
  }
  p:nth-of-type(2) {
    color: ${props =>
      props.isDark ? secondaryColorDark : secondaryColorLight};
    margin-top: -20px;
  }
`
