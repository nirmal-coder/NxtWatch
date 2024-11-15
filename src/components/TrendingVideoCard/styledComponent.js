import styled from 'styled-components'

const textColorDark = '#f1f5f9'
const textColorlight = ' #181818'

export const Container = styled.li`
  width: 100%;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  padding: 10px;
`

export const ThumbnailImg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 40%;
    margin-right: 15px;
  }
`
export const ChannelDetails = styled.div`
  display: flex;
  margin-top: 10px;
  img {
    width: 40px;
    height: 40px;
    margin-top: 25px;
    margin-right: 16px;
  }
  div {
    color: ${props => (props.isDark ? textColorDark : textColorlight)};
  }
  p {
    font-weight: 500;
  }
  @media screen and (min-width: 768px) {
    img {
      display: none;
    }
  }
`
export const ViewsContainer = styled.div`
  display: flex;
  margin-top: -25px;
  align-items: center;
  p {
    font-size: 12px;
    color: #64748b;
    margin-right: 10px;
  }
`
export const Title = styled.p`
  color: ${props => (props.isDark ? textColorDark : textColorlight)};
  font-size: 14px;
  font-weight: 500;
`
