import {Component} from 'react'
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import TrendingRoute from './components/TrendingRoute'
import ProtecterRoute from './components/ProtecterRoute'
import SavedVideos from './components/SavedVideos'

import NotFound from './components/NotFound'

import GamingRoute from './components/GamingRoute'
import VideoItemDetail from './components/VideoItemDetail'

import Theme from './context'
import './App.css'

class App extends Component {
  state = {isDark: false, saved: []}

  changeTheme = () => {
    this.setState(prev => ({
      isDark: !prev.isDark,
    }))
  }

  addSavedItem = obj => {
    this.setState(prev => ({
      saved: [...prev.saved, obj],
    }))
  }

  decreaseSavedItem = id => {
    this.setState(prev => ({
      saved: [...prev.saved].filter(each => each.id !== id),
    }))
  }

  render() {
    const {isDark, saved} = this.state

    return (
      <>
        <Theme.Provider
          value={{
            isDark,
            changeTheme: this.changeTheme,
            saved,
            addSavedItem: this.addSavedItem,
            decreaseSavedItem: this.decreaseSavedItem,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtecterRoute exact path="/" component={Home} />
            <ProtecterRoute exact path="/trending" component={TrendingRoute} />
            <ProtecterRoute exact path="/gaming" component={GamingRoute} />
            <ProtecterRoute
              exact
              path="/videos/:id"
              component={VideoItemDetail}
            />
            <ProtecterRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </Theme.Provider>
      </>
    )
  }
}

export default withRouter(App)
