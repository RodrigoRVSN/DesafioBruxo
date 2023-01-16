import { createContext } from 'react'
import {
  CharacterContextProps,
  CharactersProviderProps
} from './CharactersContext.types'

export const CharactersContext = createContext({} as CharacterContextProps)

export const CharactersProvider = ({
  data,
  children
}: CharactersProviderProps) => {
  const characters = data.slice(0, 100)

  return (
    <CharactersContext.Provider value={{ characters }}>
      {children}
    </CharactersContext.Provider>
  )
}
