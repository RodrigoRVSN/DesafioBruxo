import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: 'Jolly Lodger'
  },
  body: {
    backgroundColor: '#0a0908'
  },
  '@font-face': {
    fontFamily: 'Jolly Lodger',
    src: "url('https://fonts.googleapis.com/css2?family=Jolly+Lodger&display=swap')"
  }
})
