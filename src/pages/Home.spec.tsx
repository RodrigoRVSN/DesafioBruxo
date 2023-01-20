import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi, Mock } from 'vitest'
import { charactersMock } from '@core/mocks/charactersMock'
import Home, { getStaticProps } from './index.page'

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(charactersMock)
  })
) as Mock

describe('<Home />', () => {
  describe('Render page', () => {
    it('should be able to render and paginate users', async () => {
      render(<Home data={charactersMock} />)

      expect(screen.getByText(charactersMock[0].name)).toBeTruthy()
      expect(screen.queryByText(charactersMock[10].name)).toBeFalsy()

      fireEvent.click(screen.getByTestId('button__load-more'))

      await waitFor(() => {
        expect(screen.getByText(charactersMock[0].name)).toBeTruthy()
        expect(screen.getByText(charactersMock[10].name)).toBeTruthy()
      })
    })
  })

  describe('getStaticProps()', () => {
    it('should be able to return the values from getStaticProps', async () => {
      const result = await getStaticProps()

      expect(result).toStrictEqual({ props: { data: charactersMock } })
    })
  })
})
