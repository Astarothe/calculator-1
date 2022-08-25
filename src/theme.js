const font = 'sans-serif'
const black = '#000000'
const white = '#ffffff'
const active = '#e5e5e5'
const notActive = '#b4b4b4'
const grey = '#434343'
const error = '#c86464'
const primary = '#c06c84'
const secondary = '#6c5b7b'
const secondaryLight = '#6a6b7b'
const spaces = [0, 4, 8, 16, 32, 64, 128]

export const lightTheme = {
  body: white,
  text: white,
  title: black,
  toggleBorder: black,
  background: grey,
  colors: {
    primary,
    secondary,
    secondaryLight,
    black,
    white,
    error,
    grey,
    active,
    notActive,
  },
  spaces,
}

export const darkTheme = {
  body: notActive,
  text: white,
  title: white,
  toggleBorder: black,
  background: black,
  colors: {
    primary,
    secondary,
    secondaryLight,
    black,
    white,
    error,
    grey,
    active,
    notActive,
  },
  spaces,
}

export const colorfulTheme = {
  body: primary,
  text: white,
  title: black,
  toggleBorder: primary,
  background: black,
  colors: {
    primary,
    secondary,
    secondaryLight,
    black,
    white,
    error,
    grey,
    active,
    notActive,
  },
  spaces,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  font,
  colors: {
    secondary,
  },
}
