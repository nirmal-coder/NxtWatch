import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Theme from '../../context'

import LoaderContainer from './styledComponent'

import RecommentedVideoCard from '../RecommentedVideoCard'

const dataStatus = {
  inPrograss: 'INPROGRESS',
  fetched: 'FETCHED',
  notFetched: 'NOTFETCHED',
}

class RecommentedVideo extends Component {
  state = {
    videoData: [],
    search: '',
    status: dataStatus.inPrograss,
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
        console.log(data)
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

  render() {
    const {videoData, status} = this.state
    return (
      <>
        {status === dataStatus.inPrograss ? (
          this.renderLoader()
        ) : (
          <>
            {videoData.map(each => (
              <RecommentedVideoCard videoData={each} key={each.id} />
            ))}
          </>
        )}
      </>
    )
  }
}

export default RecommentedVideo
