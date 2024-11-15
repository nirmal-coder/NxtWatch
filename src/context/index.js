import React from 'react'

const Theme = React.createContext({
  isDark: false,
  changeTheme: () => {},
  saved: [],
  addSavedItem: () => {},
  decreaseSavedItem: () => {},
  liked: [],
  addLiked: () => {},
  removeLiked: () => {},
  disliked: [],
  addDisliked: () => {},
  removeDisliked: () => {},
})

export default Theme
