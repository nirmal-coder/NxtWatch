import {Component} from 'react'

import Loader from 'react-loader-spinner'
import {RiPlayListAddFill} from 'react-icons/ri'
import {
  MainContainer,
  Container,
  VideosListContainer,
  FailureFetchContainer,
  TrendingHeading,
} from './styledComponent'
import TrendingVideoCard from '../TrendingVideoCard'
import Header from '../Header'
import Theme from '../../context'
import SlideBar from '../SlideBar'

class SavedVideos extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enables smooth scrolling
    })
  }

  renderLoader = () => (
    <Theme.Consumer>
      {value => {
        const {isDark} = value
        return (
          <VideosListContainer data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDark ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </VideosListContainer>
        )
      }}
    </Theme.Consumer>
  )

  renderVideos = () => (
    <Theme.Consumer>
      {value => {
        const {saved, isDark} = value
        if (saved.length !== 0) {
          return (
            <VideosListContainer>
              {saved.map(each => (
                <TrendingVideoCard videoData={each} key={each.id} />
              ))}
            </VideosListContainer>
          )
        }
        return (
          <FailureFetchContainer isDark={isDark}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <h1>No Saved Videos Found</h1>
            <p>You can save your videos while watching them.</p>
          </FailureFetchContainer>
        )
      }}
    </Theme.Consumer>
  )

  render() {
    return (
      <>
        <Theme.Consumer>
          {value => {
            const {isDark, saved} = value
            return (
              <MainContainer data-testid="savedVideos">
                <Header />
                <SlideBar />
                <Container isDark={isDark}>
                  <TrendingHeading isDark={isDark}>
                    <RiPlayListAddFill className="icon" />
                    <h1>Saved Videos</h1>
                  </TrendingHeading>
                  {this.renderVideos(saved)}
                </Container>
              </MainContainer>
            )
          }}
        </Theme.Consumer>
      </>
    )
  }
}
export default SavedVideos
