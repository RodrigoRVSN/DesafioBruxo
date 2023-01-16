import { createContext, useCallback, useEffect, useState } from 'react'
import { ICharacter } from '@App/core/types/ICharacters'
import {
  CharacterContextProps,
  CharactersProviderProps
} from './CharactersContext.types'

export const CharactersContext = createContext({} as CharacterContextProps)

export const CharactersProvider = ({
  data,
  children
}: CharactersProviderProps) => {
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [offset, setOffset] = useState(10)

  useEffect(() => {
    const offsetCharacters = data.slice(0, offset)
    setCharacters(offsetCharacters)
  }, [data, offset])

  const onLoadMore = useCallback(() => {
    setOffset((prev) => prev + 10)
  }, [])

  return (
    <CharactersContext.Provider value={{ characters, onLoadMore }}>
      {children}
    </CharactersContext.Provider>
  )
}
