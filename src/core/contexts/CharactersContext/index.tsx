import { createContext, useCallback, useEffect, useState } from 'react'
import { ICharacter } from '@App/core/types/ICharacters'
import {
  CharacterContextProps,
  CharactersProviderProps
} from './CharactersContext.types'

const OFFSET = 10

export const CharactersContext = createContext({} as CharacterContextProps)

export const CharactersProvider = ({
  data,
  children
}: CharactersProviderProps) => {
  const [offset, setOffset] = useState(OFFSET)
  const [allCharacters, setAllCharacters] = useState<ICharacter[]>(data)
  const [characters, setCharacters] = useState<ICharacter[]>([])

  const onLoadMore = useCallback(() => {
    setOffset((prev) => prev + OFFSET)
  }, [])

  const onFilterByAncestry = useCallback(
    (selectedAncestry: string) => {
      if (!selectedAncestry) {
        return setAllCharacters(data)
      }

      const filteredCharacters = data.filter(
        (character) => character.ancestry === selectedAncestry
      )

      setOffset(OFFSET)
      setAllCharacters(filteredCharacters)
    },
    [data]
  )

  useEffect(() => {
    const offsetCharacters = allCharacters.slice(0, offset)
    setCharacters(offsetCharacters)
  }, [allCharacters, offset])

  return (
    <CharactersContext.Provider
      value={{ characters, onLoadMore, allCharacters, onFilterByAncestry }}
    >
      {children}
    </CharactersContext.Provider>
  )
}
