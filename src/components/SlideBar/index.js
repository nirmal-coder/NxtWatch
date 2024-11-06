import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {MdHome} from 'react-icons/md'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import {
  MainContainer,
  TopContainer,
  TopContainerItems,
  ContactUsContainer,
  ShareIconContainer,
} from './styledComponent'
import Theme from '../../context'

const listOfNavItems = [
  {
    id: '1',
    icon: <MdHome className="icon" />,
    name: 'Home',
    path: '/',
    isSelected: true,
  },
  {
    id: '2',
    icon: <FaFire className="icon" />,
    name: 'Trending',
    path: '/trending',
    isSelected: false,
  },
  {
    id: '3',
    icon: <SiYoutubegaming className="icon" />,
    name: 'Gaming',
    path: '/gaming',
    isSelected: false,
  },
  {
    id: '4',
    icon: <RiPlayListAddFill className="icon" />,
    name: 'Saved Videos',
    path: '/saved-videos',
    isSelected: false,
  },
]

class SlideBar extends Component {
  state = {listOfItems: listOfNavItems}

  render() {
    const {listOfItems} = this.state
    const {location} = this.props
    return (
      <Theme.Consumer>
        {value => {
          const {isDark} = value
          return (
            <MainContainer isDark={isDark}>
              <TopContainer>
                {listOfItems.map(each => (
                  <Link to={each.path} key={each.id} className="linkTag">
                    <TopContainerItems
                      isSelected={location.pathname === each.path}
                      isDark={isDark}
                      id={each.id}
                    >
                      {each.icon}
                      <p>{each.name}</p>
                    </TopContainerItems>
                  </Link>
                ))}
              </TopContainer>
              <ContactUsContainer isDark={isDark}>
                <p>Contact Us</p>
                <ShareIconContainer>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ShareIconContainer>
                <p>Enjoy! Now you can see your recommendations!</p>
              </ContactUsContainer>
            </MainContainer>
          )
        }}
      </Theme.Consumer>
    )
  }
}

export default withRouter(SlideBar)
