import { keyframes, styled } from '@stitches/react'

const fadeUp = keyframes({
  '0%': { transform: 'scale(0.8)', opacity: 0.4 },
  '100%': { transform: 'scale(1)', opacity: 1 }
})

export const Container = styled('div', {
  borderRadius: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem 3rem',
  lineHeight: '1.5rem',
  fontSize: '1.5rem',
  boxShadow: '1px 2px 3px 0.2rem #14213d',
  transition: '0.3s',
  animation: `ease-in 0.6s ${fadeUp}`,

  '.character-card__image--character': {
    borderRadius: '1rem'
  },

  '&:hover': {
    transform: 'scale(1.05)'
  },

  variants: {
    house: {
      Gryffindor: { backgroundColor: '#7F0909', color: '#FFC500' },
      Ravenclaw: { backgroundColor: '#000A90', color: '#946B2D' },
      Hufflepuff: { backgroundColor: '#EEE117', color: '#000000' },
      Slytherin: { backgroundColor: '#086217', color: '#AAAAAA' }
    },
    isStudent: {
      false: {
        backgroundColor: 'grey'
      }
    }
  }
})

export const Avatar = styled('div', {
  paddingBottom: '0.5rem',
  variants: {
    isAlive: {
      false: {
        filter: 'grayscale(0.95);'
      }
    }
  }
})
