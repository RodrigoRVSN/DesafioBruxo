import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Wand } from './'

describe('<Wand />', () => {
  it('should be able to render the wand properties', () => {
    render(<Wand wand={{ wood: 'b', core: 'a', length: 20 }} />)

    expect(screen.getByText('Wood: b')).toBeTruthy()
    expect(screen.getByText('Core: a')).toBeTruthy()
    expect(screen.getByText('Length: 20')).toBeTruthy()
  })

  it('should be able to render the default values', () => {
    render(<Wand wand={{ wood: '', core: '', length: null }} />)

    expect(screen.getByText('Wood: Not found')).toBeTruthy()
    expect(screen.getByText('Core: Not found')).toBeTruthy()
    expect(screen.getByText('Length: Not found')).toBeTruthy()
  })
})
