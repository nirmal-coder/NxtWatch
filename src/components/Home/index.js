import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoIosClose} from 'react-icons/io'
import {
  MainContainer,
  Container,
  BannerContainer,
  InputContainer,
  SearchIcon,
  Button,
  VideosListContainer,
  FailureFetchContainer,
  RetryButton,
  BannerCloseButton,
} from './styledComponent'
import VideoCard from '../VideoCard'
import Header from '../Header'
import SlideBar from '../SlideBar'
import Theme from '../../context'

const dataStatus = {
  inPrograss: 'INPROGRESS',
  fetched: 'FETCHED',
  notFetched: 'NOTFETCHED',
}

class Home extends Component {
  state = {
    videoData: [],
    search: '',
    status: dataStatus.inPrograss,
    displayBanner: true,
  }

  componentDidMount() {
    this.getHomeData()
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enables smooth scrolling
    })
  }

  getHomeData = async () => {
    try {
      const {search} = this.state
      const jwtToken = Cookies.get('jwt_token')
      const url = `https://apis.ccbp.in/videos/all?search=${search}`
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

  changeSearch = event => {
    const {value} = event.target
    this.setState({search: value})
    console.log(event.type)
    if (event.key === 'Enter') {
      this.getHomeData()
    }
  }

  enterClicked = event => {
    if (event.key === 'Enter') {
      this.getHomeData()
    }
  }

  closeBanner = () => {
    this.setState({displayBanner: false})
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

  renderVideos = () => {
    const {videoData, status} = this.state
    if (status === dataStatus.fetched) {
      if (videoData.length === 0) {
        return (
          <Theme.Consumer>
            {value => {
              const {isDark} = value
              return (
                <FailureFetchContainer isDark={isDark}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <h1>No Search Results Found</h1>
                  <p>Try different keywords or remove the search filter.</p>
                </FailureFetchContainer>
              )
            }}
          </Theme.Consumer>
        )
      }
      return (
        <VideosListContainer>
          {videoData.map(each => (
            <VideoCard videoData={each} key={each.id} />
          ))}
        </VideosListContainer>
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
              <RetryButton type="button" onClick={this.getHomeData}>
                Retry
              </RetryButton>
            </FailureFetchContainer>
          )
        }}
      </Theme.Consumer>
    )
  }

  render() {
    const {status, search, displayBanner} = this.state
    return (
      <>
        <Theme.Consumer>
          {value => {
            const {isDark} = value
            return (
              <MainContainer data-testid="home" isDark={isDark}>
                <Header />
                <SlideBar />
                <Container isDark={isDark}>
                  {displayBanner && (
                    <BannerContainer data-testid="banner">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                      <button type="button" className="btn">
                        GET IT NOW{' '}
                      </button>
                      <BannerCloseButton
                        onClick={this.closeBanner}
                        data-testid="close"
                      >
                        <IoIosClose className="closeIcon" />
                      </BannerCloseButton>
                    </BannerContainer>
                  )}
                  <InputContainer isDark={isDark}>
                    <input
                      type="search"
                      placeholder="Search"
                      onChange={this.changeSearch}
                      onKeyDown={this.enterClicked}
                      value={search}
                    />
                    <Button
                      isDark={isDark}
                      type="button"
                      onClick={this.getHomeData}
                      data-testid="searchButton"
                    >
                      <SearchIcon />
                    </Button>
                  </InputContainer>
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
export default Home
