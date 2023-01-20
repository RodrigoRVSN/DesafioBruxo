import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import * as hook from '@App/core/hooks/useCharacters'
import { FilterByHouse } from './'
import { houses } from './FilterByHouse.data'

const mockedSelect = vi.fn()

describe('<FilterByHouse />', () => {
  it('should be change the house option in context', () => {
    vi.spyOn(hook, 'useCharacters').mockImplementation(
      () =>
        ({
          setSelectedHouse: mockedSelect
        } as unknown as ReturnType<typeof hook.useCharacters>)
    )

    render(<FilterByHouse />)

    fireEvent.change(screen.getByTestId('filter-by-house__select-option'), {
      target: {
        value: houses[0]
      }
    })

    expect(mockedSelect).toHaveBeenCalledWith(houses[0])
  })
})
