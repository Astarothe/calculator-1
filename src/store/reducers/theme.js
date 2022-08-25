import { USE_COLORFUL_THEME, USE_LIGHT_THEME, USE_DARK_THEME } from '@/constants'
import { darkTheme, lightTheme, colorfulTheme } from '@/theme'

const DEFAULT_STATE = {
  themes: lightTheme,
}

const theme = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case USE_COLORFUL_THEME:
      return {
        ...state,
        themes: colorfulTheme,
      }
    case USE_LIGHT_THEME:
      return {
        ...state,
        themes: lightTheme,
      }
    case USE_DARK_THEME:
      return {
        ...state,
        themes: darkTheme,
      }
    default:
      return state
  }
}


export default theme
