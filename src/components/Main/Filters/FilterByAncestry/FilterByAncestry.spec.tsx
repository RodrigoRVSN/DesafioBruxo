import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import * as hook from '@App/core/hooks/useCharacters'
import { FilterByAncestry } from './'
import { ancestries } from './FilterByAncestry.data'

const mockedSelect = vi.fn()

describe('<FilterByAncestry />', () => {
  it('should be change the ancestry option in context', () => {
    vi.spyOn(hook, 'useCharacters').mockImplementation(
      () =>
        ({
          setSelectedAncestry: mockedSelect
        } as unknown as ReturnType<typeof hook.useCharacters>)
    )

    render(<FilterByAncestry />)

    fireEvent.change(screen.getByTestId('filter-by-ancestry__select-option'), {
      target: {
        value: ancestries[0]
      }
    })

    expect(mockedSelect).toHaveBeenCalledWith(ancestries[0])
  })
})
