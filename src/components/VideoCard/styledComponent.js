import styled from 'styled-components'

const textColorDark = '#f1f5f9'
const textColorlight = ' #181818'

export const Container = styled.li`
  width: 96%;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`
export const ThumbnailImg = styled.img`
  width: 100%;
`
export const ChannelDetails = styled.div`
  display: flex;
  margin-top: 10px;
  .title {
    font-size: 14px;
    font-weight: 500;
  }
  img {
    width: 50px;
    height: 50px;
    margin-top: 25px;
    margin-right: 16px;
  }
  div {
    color: ${props => (props.isDark ? textColorDark : textColorlight)};
  }
  div p:nth-of-type(1) {
    color: #7e858e;
    font-size: 14px;
  }
  p {
    font-weight: 600;
  }
`
export const ViewsContainer = styled.div`
  display: flex;
  margin-top: -25px;
  align-items: center;
  p {
    font-size: 14px;
    color: #7e858e;
    margin-right: 10px;
  }
`
