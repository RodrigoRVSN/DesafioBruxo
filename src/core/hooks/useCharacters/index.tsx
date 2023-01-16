import { useContext } from 'react'
import { CharactersContext } from '@App/core/contexts/CharactersContext'

export const useCharacters = () => {
  const context = useContext(CharactersContext)

  if (!context) {
    throw new Error('useCharacters needs to be wrapped by a CharactersProvider')
  }

  return context
}
