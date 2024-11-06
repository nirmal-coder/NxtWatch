import styled from 'styled-components'

const textColorDark = '#f1f5f9'
const textColorlight = ' #181818'

export const Container = styled.li`
  width: 120px;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    width: 160px;
  }
  @media screen and (min-width: 768px) {
    width: 180px;
  }
  @media screen and (min-width: 992px) {
    width: 220px;
  }
  padding: 10px;
`

export const ThumbnailImg = styled.img`
  width: 100%;
`
export const ChannelDetails = styled.div`
  display: flex;
  margin-top: 10px;
  p:nth-of-type(1) {
    font-size: 14px;
    font-weight: 500;
  }
  img {
    width: 40px;
    height: 40px;
    margin-top: 25px;
    margin-right: 16px;
  }
  div {
    color: ${props => (props.isDark ? textColorDark : textColorlight)};
  }
  div p:nth-of-type(1) {
    color: #64748b;
    font-size: 12px;
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
