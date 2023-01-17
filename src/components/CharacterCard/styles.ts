import { styled } from '@stitches/react'

export const Container = styled('div', {
  borderRadius: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem 2rem',
  lineHeight: '1.5rem',
  fontSize: '1.5rem',

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
  variants: {
    isAlive: {
      false: {
        filter: 'grayscale(0.95);'
      }
    }
  }
})
