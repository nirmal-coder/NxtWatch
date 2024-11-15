import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Theme from '../../context'
import {
  MainContainer,
  LoginContainer,
  InputContainer,
  CheckBoxContainer,
  LoginButton,
  ErrorMsg,
} from './styledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onShowPassword = () => {
    this.setState(prev => ({
      showPassword: !prev.showPassword,
    }))
  }

  onChangeInput = event => {
    const {id, value} = event.target
    if (id === 'username') {
      this.setState({username: value})
    } else {
      this.setState({password: value})
    }
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 10})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({showErrorMsg: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {
      showPassword,
      username,
      password,
      showErrorMsg,
      errorMsg,
    } = this.state
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <Theme.Consumer>
        {value => {
          const {isDark} = value
          return (
            <MainContainer isDark={isDark}>
              <LoginContainer isDark={isDark} onSubmit={this.submitForm}>
                <img
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <InputContainer isDark={isDark}>
                  <label htmlFor="username">USERNAME</label>
                  <br />
                  <input
                    type="text"
                    placeholder="rahul"
                    id="username"
                    onChange={this.onChangeInput}
                    value={username}
                    required
                  />
                </InputContainer>
                <InputContainer isDark={isDark}>
                  <label htmlFor="password">PASSWORD</label>
                  <br />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="rahul@2021"
                    id="password"
                    onChange={this.onChangeInput}
                    value={password}
                    required
                  />
                </InputContainer>
                <CheckBoxContainer isDark={isDark}>
                  <input
                    type="checkbox"
                    id="showpassword"
                    onChange={this.onShowPassword}
                    checked={showPassword}
                  />
                  <label htmlFor="showpassword">Show Password</label>
                </CheckBoxContainer>
                <LoginButton type="submit" isDark={isDark}>
                  Login
                </LoginButton>
                {showErrorMsg && <ErrorMsg>{`*${errorMsg}`}</ErrorMsg>}
              </LoginContainer>
            </MainContainer>
          )
        }}
      </Theme.Consumer>
    )
  }
}
export default Login
