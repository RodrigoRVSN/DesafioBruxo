import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import NotFoundPage from './404.page'

const replaceMock = vi.fn()

vi.mock('next/router', () => ({
  useRouter() {
    return {
      replace: replaceMock
    }
  }
}))

describe('<NotFoundPage />', () => {
  it('should be able to redirect to the home', () => {
    render(<NotFoundPage />)

    fireEvent.click(screen.getByTestId('page-not-found__button-redirect'))

    expect(replaceMock).toHaveBeenCalledWith('/')
  })
})
