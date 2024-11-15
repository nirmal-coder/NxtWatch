import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Theme from '../../context'
import {
  Container,
  ThumbnailImg,
  ChannelDetails,
  ViewsContainer,
  Title,
} from './styledComponent'

const RecommentedVideoCard = props => {
  const {videoData} = props
  const {channel, id, title, thumbnailUrl, viewCount, publishedAt} = videoData

  const date = formatDistanceToNow(new Date(publishedAt), {addSuffix: false})

  const changeFormat = date.split(' ').splice(1, 3).join(' ')

  return (
    <Theme.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`/videos/${id}`}>
            <Container isDark={isDark}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <ChannelDetails isDark={isDark}>
                <img src={channel.profileImageUrl} alt={channel.name} />
                <div>
                  <Title isDark={isDark}>{title}</Title>
                  <p>{channel.name}</p>
                  <ViewsContainer>
                    <p>{`${viewCount} views`}</p>
                    <p>{`. ${changeFormat} ago`}</p>
                  </ViewsContainer>
                </div>
              </ChannelDetails>
            </Container>
          </Link>
        )
      }}
    </Theme.Consumer>
  )
}

export default RecommentedVideoCard
