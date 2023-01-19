import { render } from '@testing-library/react'
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
    it('should be able to redirect to the home', () => {
      render(<Home data={charactersMock} />)

      charactersMock.forEach((character) => {
        expect(character.name).toBeTruthy()
      })
    })
  })

  describe('getStaticProps', () => {
    it('should das edirect to the home', async () => {
      const result = await getStaticProps()

      expect(result).toStrictEqual({ props: { data: charactersMock } })
    })
  })
})
