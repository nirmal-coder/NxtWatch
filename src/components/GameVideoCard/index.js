import {Link} from 'react-router-dom'
import Theme from '../../context'
import {
  Container,
  ThumbnailImg,
  ChannelDetails,
  ViewsContainer,
} from './styledComponent'

const GameVideoCard = props => {
  const {videoData} = props
  const {id, title, thumbnailUrl, viewCount} = videoData

  return (
    <Theme.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`/videos/${id}`}>
            <Container isDark={isDark}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <ChannelDetails isDark={isDark}>
                <div>
                  <p>{title}</p>
                  <ViewsContainer>
                    <p>{`${viewCount} Watching Worldwide`}</p>
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

export default GameVideoCard