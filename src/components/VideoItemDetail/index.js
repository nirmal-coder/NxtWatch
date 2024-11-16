import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddFill} from 'react-icons/ri'
import {
  MainContainer,
  Container,
  VideosListContainer,
  FailureFetchContainer,
  RetryButton,
  VideoPlayerContainer,
  ViewsAndLikesContainer,
  ViewsContainer,
  LoaderContainer,
  LikesContainer,
  Button,
  Title,
  ChannelContainer,
  RecommendedVideos,
  Description,
} from './styledComponent'

import Theme from '../../context'
import Header from '../Header'
import SlideBar from '../SlideBar'
import RecommentedVideo from '../RecommentedVideo'

const dataStatus = {
  inPrograss: 'INPROGRESS',
  fetched: 'FETCHED',
  notFetched: 'NOTFETCHED',
}

class VideoItemDetail extends Component {
  state = {
    videoData: {},
    status: dataStatus.inPrograss,
  }

  componentDidMount() {
    this.getVideoDetail()
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enables smooth scrolling
    })
  }

  componentDidUpdate(prevProps) {
    const {match} = this.props
    const {params} = match
    const {id} = params
    if (prevProps.match.params.id !== id) {
      this.getVideoDetail()
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  getVideoDetail = async () => {
    try {
      const {match} = this.props
      const {params} = match
      const {id} = params
      const jwtToken = Cookies.get('jwt_token')
      const url = `https://apis.ccbp.in/videos/${id}`
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }

      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        const videoDetails = data.video_details
        const updatedList = {
          id: videoDetails.id,
          title: videoDetails.title,
          thumbnailUrl: videoDetails.thumbnail_url,
          videoUrl: videoDetails.video_url,
          channel: {
            name: videoDetails.channel.name,
            profileImageUrl: videoDetails.channel.profile_image_url,
            subscriberCount: videoDetails.channel.subscriber_count,
          },
          viewCount: videoDetails.view_count,
          publishedAt: videoDetails.published_at,
          description: videoDetails.description,
        }
        this.setState({videoData: updatedList, status: dataStatus.fetched})
      } else {
        this.setState({status: dataStatus.notFetched})
      }
    } catch {
      this.setState({status: dataStatus.notFetched})
    }
  }

  onChangeLike = (addLiked, liked, removeLiked, removeDisliked) => {
    const {videoData} = this.state
    const {id} = videoData
    const isLiked =
      liked.length !== 0 ? liked.some(each => each.id === id) : false
    if (isLiked) {
      removeLiked(videoData.id)
    } else {
      addLiked(videoData)
      removeDisliked(videoData.id)
    }
  }

  onChangeDislike = (addDisliked, removeDisliked, disliked, removeLiked) => {
    const {videoData} = this.state
    const {id} = videoData
    const isDisliked =
      disliked.length !== 0 ? disliked.some(each => each.id === id) : false

    if (isDisliked) {
      removeDisliked(videoData.id)
    } else {
      addDisliked(videoData)
      removeLiked(videoData.id)
    }
  }

  onChangeSave = (decreaseSavedItem, addSavedItem, saved) => {
    const {videoData} = this.state
    const isSaved =
      saved.length !== 0 ? saved.some(each => each.id === videoData.id) : false

    if (isSaved) {
      decreaseSavedItem(videoData.id)
    } else {
      addSavedItem(videoData)
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

  renderVideoDetail = (saved, liked, disliked) => {
    const {videoData, status} = this.state
    const {
      id,
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoData
    const isSaved =
      saved.length !== 0 ? saved.some(each => each.id === id) : false
    const isLiked =
      liked.length !== 0 ? liked.some(each => each.id === id) : false
    const isDisliked =
      disliked.length !== 0 ? disliked.some(each => each.id === id) : false

    const date = formatDistanceToNow(new Date(publishedAt), {addSuffix: false})

    const changeFormat = date.split(' ').splice(1, 3).join(' ')

    if (status === dataStatus.fetched) {
      return (
        <Theme.Consumer>
          {value => {
            const {
              isDark,
              addSavedItem,
              decreaseSavedItem,
              addLiked,
              removeLiked,
              addDisliked,
              removeDisliked,
            } = value
            return (
              <>
                <VideosListContainer isDark={isDark}>
                  <VideoPlayerContainer>
                    <ReactPlayer
                      url={videoUrl}
                      controls
                      width="100%"
                      height="100%"
                    />
                  </VideoPlayerContainer>
                  <Title isDark={isDark}>{title}</Title>
                  <ViewsAndLikesContainer>
                    <ViewsContainer isDark={isDark}>
                      <p>{`${viewCount} views`}</p>
                      <p>{`. ${changeFormat} ago`}</p>
                    </ViewsContainer>
                    <LikesContainer>
                      <Button
                        isSelected={isLiked}
                        isDark={isDark}
                        type="button"
                        onClick={() =>
                          this.onChangeLike(
                            addLiked,
                            liked,
                            removeLiked,
                            removeDisliked,
                          )
                        }
                      >
                        <BiLike />
                        Like
                      </Button>
                      <Button
                        isSelected={isDisliked}
                        isDark={isDark}
                        type="button"
                        onClick={() =>
                          this.onChangeDislike(
                            addDisliked,
                            removeDisliked,
                            disliked,
                            removeLiked,
                          )
                        }
                      >
                        <BiDislike />
                        Dislike
                      </Button>
                      <Button
                        isSelected={isSaved}
                        isDark={isDark}
                        type="button"
                        onClick={() =>
                          this.onChangeSave(
                            decreaseSavedItem,
                            addSavedItem,
                            saved,
                          )
                        }
                      >
                        <RiPlayListAddFill />
                        <p>{isSaved ? 'saved' : 'save'}</p>
                      </Button>
                    </LikesContainer>
                  </ViewsAndLikesContainer>
                  <hr />
                  <ChannelContainer isDark={isDark}>
                    <img src={channel.profileImageUrl} alt="channel logo" />
                    <div>
                      <p>{channel.name}</p>
                      <p>{`${channel.subscriberCount} subscribers`}</p>
                    </div>
                  </ChannelContainer>
                  <Description isDark={isDark}>{description}</Description>
                </VideosListContainer>
                <RecommendedVideos>
                  <RecommentedVideo />
                </RecommendedVideos>
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
              <RetryButton type="button" onClick={this.getVideoDetail}>
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
      <Theme.Consumer>
        {value => {
          const {isDark, saved, liked, disliked} = value
          return (
            <MainContainer>
              <Header />
              <SlideBar />
              <Container isDark={isDark} data-testid="videoItemDetails">
                {status === dataStatus.inPrograss
                  ? this.renderLoader()
                  : this.renderVideoDetail(saved, liked, disliked)}
              </Container>
            </MainContainer>
          )
        }}
      </Theme.Consumer>
    )
  }
}

export default VideoItemDetail
