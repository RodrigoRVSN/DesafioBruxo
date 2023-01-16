import { styled } from '@stitches/react'

export const Container = styled('div', {
  variants: {
    house: {
      Gryffindor: { backgroundColor: '#7F0909' },
      Ravenclaw: { backgroundColor: '#000A90' },
      Hufflepuff: { backgroundColor: '#EEE117' },
      Slytherin: { backgroundColor: '#086217' }
    },
    isStudent: {
      false: {
        backgroundColor: 'grey'
      }
    }
  }
})
