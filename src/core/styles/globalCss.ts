import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
  '@font-face': {
    fontFamily: 'Jolly Lodger',
    src: "url('https://fonts.googleapis.com/css2?family=Jolly+Lodger&display=swap')"
  }
})
