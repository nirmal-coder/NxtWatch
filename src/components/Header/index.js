import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {MdHome} from 'react-icons/md'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {
  LogoImage,
  NavBar,
  NavItemsContainer,
  NavItems,
  ThemeIconDark,
  ThemeIconLight,
  BarIconDark,
  BarIconLight,
  LogoutIcon,
  LogoutIconDark,
  NavItemsContainerLg,
  LogoutButton,
  NavIcons,
  CloseBarIconLight,
  CloseBarIconDark,
  PopupContainer,
  PopUpButtonContainer,
  PopupPara,
  NavModalContainer,
  CloseButton,
  TriggerButton,
  LogoutButtonIcon,
  ConfirmLogoutContainer,
  ThemeIconButton,
} from './styledComponent'

import Theme from '../../context'

class Header extends Component {
  state = {
    showNavItems: false,
  }

  logout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  showNavbar = () => {
    this.setState(prev => ({
      showNavItems: !prev.showNavItems,
    }))
  }

  render() {
    const {location} = this.props

    return (
      <Theme.Consumer>
        {value => {
          const {isDark, changeTheme} = value
          const callFunction = () => {
            changeTheme()
          }

          // smallView

          const themeIcon = isDark ? <ThemeIconDark /> : <ThemeIconLight />
          const barIcon = isDark ? <BarIconDark /> : <BarIconLight />
          const closeBarIcon = isDark ? (
            <CloseBarIconDark />
          ) : (
            <CloseBarIconLight />
          )
          const logoutIcon = isDark ? (
            <LogoutIconDark className="logoutIcon" />
          ) : (
            <LogoutIcon className="logoutIcon" />
          )

          return (
            <>
              <NavBar isDark={isDark}>
                <Link to="/">
                  <LogoImage
                    src={
                      isDark
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </Link>
                <NavItemsContainer isDark={isDark}>
                  <NavItems>
                    <ThemeIconButton
                      type="button"
                      data-testid="theme"
                      onClick={callFunction}
                    >
                      {themeIcon}
                    </ThemeIconButton>
                  </NavItems>
                  <NavItems onClick={this.showNavbar}>
                    <div>
                      <Popup
                        modal
                        trigger={
                          <TriggerButton
                            type="button"
                            className="trigger-button"
                          >
                            {barIcon}
                          </TriggerButton>
                        }
                      >
                        {close => (
                          <>
                            <NavModalContainer isDark={isDark}>
                              <Link to="/" onClick={() => close()}>
                                <NavIcons
                                  isDark={isDark}
                                  isSelected={location.pathname === '/'}
                                >
                                  <MdHome className="icon" />
                                  <p>Home</p>
                                </NavIcons>
                              </Link>
                              <Link to="/trending" onClick={() => close()}>
                                <NavIcons
                                  isDark={isDark}
                                  isSelected={location.pathname === '/trending'}
                                >
                                  <FaFire className="icon" />
                                  <p>Trending</p>
                                </NavIcons>
                              </Link>
                              <Link to="/gaming" onClick={() => close()}>
                                <NavIcons
                                  isDark={isDark}
                                  isSelected={location.pathname === '/gaming'}
                                >
                                  <SiYoutubegaming className="icon" />
                                  <p>Gaming</p>
                                </NavIcons>
                              </Link>
                              <Link to="/saved-videos" onClick={() => close()}>
                                <NavIcons
                                  isDark={isDark}
                                  isSelected={
                                    location.pathname === '/saved-videos'
                                  }
                                >
                                  <RiPlayListAddFill className="icon" />
                                  <p>Saved Videos</p>
                                </NavIcons>
                              </Link>
                            </NavModalContainer>
                            <CloseButton
                              type="button"
                              className="trigger-button"
                              onClick={() => close()}
                            >
                              {closeBarIcon}
                            </CloseButton>
                          </>
                        )}
                      </Popup>
                    </div>
                  </NavItems>
                  <NavItems isDark={isDark}>
                    <PopupContainer isDark={isDark}>
                      <Popup
                        modal
                        trigger={
                          <LogoutButtonIcon>{logoutIcon}</LogoutButtonIcon>
                        }
                      >
                        {close => (
                          <>
                            <div>
                              <PopupPara>
                                Are you sure you want to logout?
                              </PopupPara>
                            </div>
                            <PopUpButtonContainer>
                              <button
                                type="button"
                                className="trigger-button"
                                onClick={() => close()}
                              >
                                Cancel
                              </button>
                              <button onClick={this.logout} type="button">
                                Confirm
                              </button>
                            </PopUpButtonContainer>
                          </>
                        )}
                      </Popup>
                    </PopupContainer>
                  </NavItems>
                </NavItemsContainer>

                <NavItemsContainerLg isDark={isDark}>
                  <NavItems onClick={callFunction}>{themeIcon}</NavItems>
                  <NavItems>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </NavItems>
                  <NavItems>
                    <PopupContainer isDark={isDark}>
                      <Popup
                        modal
                        trigger={
                          <LogoutButton isDark={isDark}>Logout</LogoutButton>
                        }
                        className="popup-content"
                      >
                        {close => (
                          <ConfirmLogoutContainer isDark={isDark}>
                            <div>
                              <PopupPara isDark={isDark}>
                                Are you sure you want to logout?
                              </PopupPara>
                            </div>
                            <PopUpButtonContainer isDark={isDark}>
                              <button
                                type="button"
                                className="trigger-button"
                                onClick={() => close()}
                              >
                                Cancel
                              </button>
                              <button onClick={this.logout} type="button">
                                Confirm
                              </button>
                            </PopUpButtonContainer>
                          </ConfirmLogoutContainer>
                        )}
                      </Popup>
                    </PopupContainer>
                  </NavItems>
                </NavItemsContainerLg>
              </NavBar>
            </>
          )
        }}
      </Theme.Consumer>
    )
  }
}

export default withRouter(Header)
