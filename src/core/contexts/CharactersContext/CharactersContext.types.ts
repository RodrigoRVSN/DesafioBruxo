import { ReactNode } from 'react'
import { ICharacter } from '@App/core/types/ICharacters'

export type CharactersProviderProps = {
  data: ICharacter[]
  children: ReactNode
}

export type CharacterContextProps = {
  characters: ICharacter[]
  onLoadMore: () => void
  allCharacters: ICharacter[]
  onFilterByAncestry: (selectedAncestry: string) => void
}
