import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'
import {
  MainContainer,
  Container,
  VideosListContainer,
  FailureFetchContainer,
  RetryButton,
  TrendingHeading,
  LoaderContainer,
} from './styledComponent'
import TrendingVideoCard from '../TrendingVideoCard'
import Header from '../Header'
import Theme from '../../context'
import SlideBar from '../SlideBar'

const dataStatus = {
  inPrograss: 'INPROGRESS',
  fetched: 'FETCHED',
  notFetched: 'NOTFETCHED',
}

class TrendingRoute extends Component {
  state = {videoData: [], status: dataStatus.inPrograss}

  componentDidMount() {
    this.getTrendingData()
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enables smooth scrolling
    })
  }

  getTrendingData = async () => {
    this.setState({status: dataStatus.inPrograss})
    try {
      const jwtToken = Cookies.get('jwt_token')
      const url = `https://apis.ccbp.in/videos/trending`
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
          channel: {
            name: each.channel.name,
            profileImageUrl: each.channel.profile_image_url,
          },
          viewCount: each.view_count,
          publishedAt: each.published_at,
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
                  <FaFire className="icon" />
                  <h1>Trending</h1>
                </TrendingHeading>
                <VideosListContainer>
                  {videoData.map(each => (
                    <TrendingVideoCard videoData={each} key={each.id} />
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
              <RetryButton type="button" onClick={this.getTrendingData}>
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
        <Theme.Consumer data-testid="trending">
          {value => {
            const {isDark} = value
            return (
              <MainContainer>
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
export default TrendingRoute
