import { styled } from '@stitches/react'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  padding: '2rem 5rem',
  alignItems: 'center'
})

export const List = styled('section', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  justifyContent: 'center'
})

export const FiltersContainer = styled('div', {
  alignSelf: 'flex-end',
  display: 'flex',
  gap: '2rem'
})
