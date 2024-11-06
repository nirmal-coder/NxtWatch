import styled from 'styled-components'
import {IoSearchOutline} from 'react-icons/io5'

const bgColorLight = '#f9f9f9'
const bgColorDark = ' #181818'

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
  align-items: flex-start;
  position: relative;
  padding: 10px;
  background-color: ${props => (props.isDark ? bgColorDark : bgColorLight)};
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin-left: 20%;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;

  background-size: cover;
  padding: 15px;
  margin-bottom: 16px;
  img {
    width: 25%;
  }
  p {
    font-size: 18px;
  }
  .btn {
    background-color: transparent;
    border: 1px solid #1e293b;
    padding: 10px;
  }
`

export const BannerCloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 36px;
  background-color: transparent;
  border: 0px;
  .closeIcon {
    font-size: 16px;
  }
`
export const InputContainer = styled.div`
  width: min(100%, 300px);
  height: 35px;
  display: flex;
  align-items: center;
  border: 1px solid ${props => (props.isDark ? '#606060' : ' #f1f5f9')};
  input {
    width: 85%;
    height: 33px;
    background-color: ${props => (props.isDark ? bgColorDark : '#fff')};
    outline: none;
    border: 0px;
    padding-left: 5px;
    caret-color: ${props => (props.isDark ? ' #94a3b8' : '#475569')};
    color: ${props => (props.isDark ? ' #f9f9f9' : ' #181818')};
  }
`
export const Button = styled.button`
  width: 16%;
  border: 0px;
  height: 35px;
  border: 1px solid ${props => (props.isDark ? '#606060' : ' #f1f5f9')};
  background-color: ${props => (props.isDark ? '#313131' : '#fff')};
`
export const SearchIcon = styled(IoSearchOutline)`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isDark ? '#181818' : '#64748b')};
`
export const VideosListContainer = styled.ul`
  width: 100%;
  min-height: 85vh;
  display: flex;
  justify-content: space-around;
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
