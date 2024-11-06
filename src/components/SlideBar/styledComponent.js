import styled from 'styled-components'

const bgLight = '#ffffff'
const bgDark = '#231f20'

const darkText = '#f8fafc'
const lightText = '#1e293b'

export const MainContainer = styled.div`
  width: 20%;
  height: calc(100vh - 60px);
  background-color: ${props => (props.isDark ? bgDark : bgLight)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  @media screen and (max-width: 576px) {
    display: none;
  }
  margin-top: 60px;
`
export const TopContainer = styled.div`
  height: 40%;
  margin-botton: 10px;
  Link {
    text-decoration: none;
  }
`
export const TopContainerItems = styled.div`
  display: flex;
  padding: 0px 8px;
  align-items: center;
  background-color: ${props => {
    if (props.isSelected) {
      if (props.isDark) {
        return '#383838'
      }
      return ' #d7dfe9'
    }
    return null
  }};
  .icon {
    font-size: 45px;
    padding: 8px;
    color: ${props => (props.isDark ? '#f8fafc' : '#181818')};
    color: ${props => props.isSelected && '#ff0000'};
  }

  p {
    font-size: 12px;
    font-weight: ${props => props.isSelected && '700'};
    color: ${props => (props.isDark ? darkText : lightText)};
  }
  a {
    text-decoration: none;
  }
`
export const NavIcons = styled.div``

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  img {
    width: 30px;
  }
  p {
    color: ${props => (props.isDark ? darkText : lightText)};
    font-weight: 500px;
    margin-left: 8px;
    font-size: 12px;
  }
  p:nth-of-type(1) {
    color: ${props => (props.isDark ? darkText : lightText)};
    margin-left: 8px;
    margin-bottom: 15px;
  }
`

export const ShareIconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
