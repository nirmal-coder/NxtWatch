import styled from 'styled-components'

const bgLight = ' #f9f9f9'
const bgLoginCardLight = ' #ffffff'
const primaryTextColorLight = '#64748b'
const secondaryTextColorLight = ' #1e293b'

const bgDark = '#1e293b'
const bgLoginCardDark = '#0f0f0f'
const primaryTextColorDark = '#f1f5f9'

export const MainContainer = styled.div`
  background-color: ${props => (props.isDark ? bgDark : bgLight)};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`
export const LoginContainer = styled.form`
  width: min(90%, 350px);
  background-color: ${props =>
    props.isDark ? bgLoginCardDark : bgLoginCardLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 16px #475569;
  padding: 32px 16px;
  border-radius: 10px;
  img {
    width: 50%;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  margin: 10px 0px;
  input {
    width: 100%;
    padding-left: 10px;
    height: 40px;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    outline: none;
    margin: 5px 0px;
    background-color: ${props =>
      props.isDark ? bgLoginCardDark : bgLoginCardLight};
    color: ${props => (props.isDark ? '#fff' : secondaryTextColorLight)};
    caret-color: ${props =>
      props.isDark ? '#ffffff' : secondaryTextColorLight};
  }
  label {
    font-size: 1rem;
    font-weight: 600;
    color: ${props =>
      props.isDark ? primaryTextColorDark : primaryTextColorLight};
  }
`
export const CheckBoxContainer = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  margin: 0px 0px 20px 0px;
  input {
    height: 18px;
    width: 15px;
    margin-right: 10px;
  }
  label {
    color: ${props =>
      props.isDark ? primaryTextColorDark : secondaryTextColorLight};
    font-weight: 500;
  }
`

export const LoginButton = styled.button`
  width: 100%;
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px;
  border: 0px;
  border-radius: 8px;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  align-self: flex-start;
`
