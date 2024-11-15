import styled from 'styled-components'

const bgColorLight = '#f9f9f9'
const bgColorDark = '#0f0f0f'

const darkText = '#f8fafc'
const lightText = '#1e293b'

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  background-color: ${props => (props.isDark ? bgColorDark : bgColorLight)};
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: flex-start;
  background-color: ${props => (props.isDark ? bgColorDark : bgColorLight)};
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin-left: 20%;
  }
`
export const VideosListContainer = styled.ul`
  width: 100%;
  min-height: 85vh;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 0px;
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
        object-fit: contain;
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
export const NoSearchResult = styled.div`
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
export const TrendingHeading = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 16px;
  align-items: center;
  background-color: ${props => {
    if (props.isDark) {
      return '#383838'
    }
    return '#f8fafc'
  }};
  .icon {
    font-size: 45px;
    padding: 8px;
    color: #ff0000;
    background-color: ${props => (props.isDark ? ' #0f0f0f' : '#cbd5e1')};
    border-radius: 50%;
    margin-right: 10px;
  }

  h1 {
    font-size: 16px;

    color: ${props => (props.isDark ? darkText : lightText)};
  }
  a {
    text-decoration: none;
  }
`
