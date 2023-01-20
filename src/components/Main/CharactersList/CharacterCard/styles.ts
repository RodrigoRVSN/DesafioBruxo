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
    boxShadow: '1px 2px 3px 0.2rem #ae0001',
    transform: 'scale(1.05)'
  },

  variants: {
    house: {
      Gryffindor: {
        backgroundImage: 'linear-gradient(0, #7F0909, transparent)',
        color: '#FFC500'
      },
      Ravenclaw: {
        backgroundImage: 'linear-gradient(0, #000A90, transparent)',
        color: '#946B2D'
      },
      Hufflepuff: {
        backgroundImage: 'linear-gradient(0, #EEE117, transparent)',
        color: '#000000'
      },
      Slytherin: {
        backgroundImage: 'linear-gradient(0, #086217, transparent)',
        color: '#AAAAAA'
      }
    },
    isStudent: {
      false: {
        backgroundImage: 'linear-gradient(0, grey, transparent)'
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

export const Name = styled('span', {
  fontSize: 32,
  paddingBottom: '2rem'
})
