import { styled } from '@stitches/react'

export const CustomButton = styled('button', {
  borderRadius: '0.5rem',
  cursor: 'pointer',
  fontSize: '2rem',
  padding: '0.5rem 2rem',
  width: 'fit-content',
  transition: '0.3s',

  '&:hover': {
    opacity: 0.6
  }
})
