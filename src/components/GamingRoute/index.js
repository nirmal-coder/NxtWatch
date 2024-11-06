import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import {
  MainContainer,
  Container,
  VideosListContainer,
  FailureFetchContainer,
  RetryButton,
  TrendingHeading,
  LoaderContainer,
} from './styledComponent'
import GameVideoCard from '../GameVideoCard'
import Header from '../Header'
import SlideBar from '../SlideBar'
import Theme from '../../context'

const dataStatus = {
  inPrograss: 'INPROGRESS',
  fetched: 'FETCHED',
  notFetched: 'NOTFETCHED',
}

class GamingRoute extends Component {
  state = {videoData: [], status: dataStatus.inPrograss}

  componentDidMount() {
    this.getGamingData()
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enables smooth scrolling
    })
  }

  getGamingData = async () => {
    this.setState({status: dataStatus.inPrograss})
    try {
      const jwtToken = Cookies.get('jwt_token')
      const url = ` https://apis.ccbp.in/videos/gaming`
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }

      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        const {videos} = data
        const updatedList = videos.map(each => ({
          id: each.id,
          title: each.title,
          thumbnailUrl: each.thumbnail_url,
          viewCount: each.view_count,
        }))
        this.setState({videoData: updatedList, status: dataStatus.fetched})
      } else {
        this.setState({status: dataStatus.notFetched})
      }
    } catch {
      this.setState({status: dataStatus.notFetched})
    }
  }

  renderLoader = () => (
    <Theme.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LoaderContainer data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDark ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </Theme.Consumer>
  )

  renderVideos = () => {
    const {videoData, status} = this.state
    if (status === dataStatus.fetched) {
      return (
        <Theme.Consumer>
          {value => {
            const {isDark} = value
            return (
              <>
                <TrendingHeading isDark={isDark}>
                  <SiYoutubegaming className="icon" />
                  <h1>Gaming</h1>
                </TrendingHeading>
                <VideosListContainer>
                  {videoData.map(each => (
                    <GameVideoCard videoData={each} key={each.id} />
                  ))}
                </VideosListContainer>
              </>
            )
          }}
        </Theme.Consumer>
      )
    }
    return (
      <Theme.Consumer>
        {value => {
          const {isDark} = value
          return (
            <FailureFetchContainer isDark={isDark}>
              <img
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <h1>Oops! Something Went Wrong</h1>
              <p>
                We are having some trouble completing your request. Please try
                again.
              </p>
              <RetryButton type="button" onClick={this.getGamingData}>
                Retry
              </RetryButton>
            </FailureFetchContainer>
          )
        }}
      </Theme.Consumer>
    )
  }

  render() {
    const {status} = this.state
    return (
      <>
        <Theme.Consumer>
          {value => {
            const {isDark} = value
            return (
              <MainContainer data-testid="gaming">
                <Header />
                <SlideBar />
                <Container isDark={isDark}>
                  {status === dataStatus.inPrograss
                    ? this.renderLoader()
                    : this.renderVideos()}
                </Container>
              </MainContainer>
            )
          }}
        </Theme.Consumer>
      </>
    )
  }
}
export default GamingRoute
