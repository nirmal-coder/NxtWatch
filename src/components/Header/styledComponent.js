import styled from 'styled-components'
import {BsMoon} from 'react-icons/bs'
import {BiSun} from 'react-icons/bi'
import {FaBars} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {IoIosClose} from 'react-icons/io'

const bgLight = '#ffffff'
const bgDark = '#231f20'

export const NavBar = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  background-color: ${props => (props.isDark ? bgDark : bgLight)};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`
export const LogoImage = styled.img`
  width: 100px;
  margin-left: 15px;
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`
export const NavItemsContainer = styled.ul`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavItemsContainerLg = styled.ul`
  width: 50%;
  display: none;
  justify-content: space-around;
  align-items: center;
  img {
    width: 35px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const ThemeIconButton = styled.button`
  background-color: transparent;
  border: 0px;
`
export const NavItems = styled.li`
  width: 50px;
  list-style: none;
  font-size: 1rem;
  background-color: transparent;
  .logoutIcon {
    color: ${props => (props.isDark ? '#f1f5f9' : ' #231f20')};
    border: 0px;
    background-color: transparent;
  }
`
export const ThemeIconDark = styled(BiSun)`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
`
export const ThemeIconLight = styled(BsMoon)`
  font-size: 1.5rem;
  transform: scaleX(-1);
  cursor: pointer;
`
export const BarIconDark = styled(FaBars)`
  font-size: 1.5rem;
  color: #fff;
`
export const BarIconLight = styled(FaBars)`
  font-size: 1.5rem;
`
export const CloseBarIconDark = styled(IoIosClose)`
  font-size: 1.5rem;
  color: #fff;
`
export const CloseBarIconLight = styled(IoIosClose)`
  font-size: 1.5rem;
`

export const LogoutIcon = styled(FiLogOut)`
  font-size: 1.5rem;
`
export const LogoutIconDark = styled(FiLogOut)`
  font-size: 1.5rem;
  color: #fff;
`
export const LogoutButton = styled.button`
  padding: 5px 10px;
  background-color: ${props => (props.isDark ? bgDark : '#fff')};
  color: ${props => (props.isDark ? '#fff' : '#4f46e5')};
  border: 2px solid ${props => (props.isDark ? '#fff' : '#4f46e5')};
  border-radius: 3px;
`

export const NavIcons = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${props => {
    if (props.isSelected) {
      if (props.isDark) {
        return '#424242'
      }
      return ' #d7dfe9'
    }
    return null
  }};
  .icon {
    font-size: 40px;
    padding: 8px;
    border-radius: 50%;

    margin-right: 10px;
    color: ${props => {
      if (props.isSelected) {
        return '#ff0000'
      }
      if (props.isDark) {
        return '#f9f9f9'
      }
      return '#181818'
    }};
  }
  @media screen and (min-width: 768px) {
    .icon {
      display: none;
    }
  }

  p {
    color: ${props => (props.isDark ? '#fff' : ' #181818')};
    font-weight: ${props => (props.isSelected ? '600' : '400')};
  }
`

export const PopupContainer = styled.div`
  background-color: ${props => (props.isDark ? bgDark : bgLight)};
  .popup-content {
    background-color: ${props => (props.isDark ? bgDark : bgLight)};
    padding: 15px;
    border-radius: 10px;
    width: 100%;
    margin: 0px;
    border: 0px;
  }
`
export const PopupPara = styled.p`
  text-align: center;
  color: ${props => (props.isDark ? '#fff' : ' #181818')};
`
export const PopUpButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  button:nth-of-type(1) {
    background-color: ${props => (props.isDark ? 'transparent' : bgLight)};
    padding: 8px;
    border: 1px solid #475569;
    color: #94a3b8;
    border: ${props => (props.isDark ? '1px solid #64748b' : '0px')};
    margin-bottom: 16px;
    margin-right: 16px;
    border-radius: 3px;
  }

  button:nth-of-type(2) {
    padding: 8px;
    border: 1px solid #475569;
    color: #fff;
    background-color: #4f46e5;
    border: 0px;
    margin-bottom: 16px;
  }
`

export const ConfirmLogoutContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : bgLight)};
`

export const NavModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.isDark ? bgDark : bgLight)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`
export const CloseButton = styled.div`
  position: fixed;
  top: 0;
  right: 10px;
  z-index: 3;
`
export const TriggerButton = styled.button`
  background-color: transparent;
  border: 0px;
`
export const LogoutButtonIcon = styled.button`
  background-color: transparent;
  border: 0px;
`
