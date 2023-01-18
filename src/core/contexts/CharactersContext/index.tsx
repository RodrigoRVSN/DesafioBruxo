import { createContext, useCallback, useEffect, useState } from 'react'
import { ICharacter } from '@App/core/types/ICharacters'
import {
  CharacterContextProps,
  CharactersProviderProps
} from './CharactersContext.types'

const OFFSET = 10

export const CharactersContext = createContext({} as CharacterContextProps)

export const CharactersProvider = ({
  initialData,
  children
}: CharactersProviderProps) => {
  const [offset, setOffset] = useState(OFFSET)
  const [allCharacters, setAllCharacters] = useState<ICharacter[]>(initialData)
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [selectedHouse, setSelectedHouse] = useState('')
  const [selectedAncestry, setSelectedAncestry] = useState('')

  const onLoadMore = useCallback(() => {
    setOffset((prev) => prev + OFFSET)
  }, [])

  const filterByOption = useCallback(
    (
      charactersUpdated: ICharacter[],
      selectedOption: string,
      filterField: 'house' | 'ancestry'
    ) => {
      if (selectedOption === 'without') {
        return charactersUpdated.filter((character) => !character[filterField])
      }

      return charactersUpdated.filter((character) =>
        character[filterField].includes(selectedOption)
      )
    },
    []
  )

  useEffect(() => {
    let filteredData = initialData
    filteredData = filterByOption(filteredData, selectedHouse, 'house')
    filteredData = filterByOption(filteredData, selectedAncestry, 'ancestry')

    setOffset(OFFSET)
    setAllCharacters(filteredData)
  }, [initialData, filterByOption, selectedAncestry, selectedHouse])

  useEffect(() => {
    const offsetCharacters = allCharacters.slice(0, offset)
    setCharacters(offsetCharacters)
  }, [allCharacters, offset])

  return (
    <CharactersContext.Provider
      value={{
        characters,
        onLoadMore,
        allCharacters,
        setSelectedHouse,
        setSelectedAncestry
      }}
    >
      {children}
    </CharactersContext.Provider>
  )
}
