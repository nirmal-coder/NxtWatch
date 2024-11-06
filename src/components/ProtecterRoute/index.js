import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtecterRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  console.log(props)

  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtecterRoute
