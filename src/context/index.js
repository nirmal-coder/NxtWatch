import React from 'react'

const Theme = React.createContext({
  isDark: false,
  changeTheme: () => {},
  saved: [],
  addSavedItem: () => {},
  decreaseSavedItem: () => {},
})

export default Theme
