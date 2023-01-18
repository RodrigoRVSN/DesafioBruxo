import { Dispatch, ReactNode, SetStateAction } from 'react'
import { ICharacter } from '@App/core/types/ICharacters'

export type CharactersProviderProps = {
  initialData: ICharacter[]
  children: ReactNode
}

export type CharacterContextProps = {
  characters: ICharacter[]
  onLoadMore: () => void
  allCharacters: ICharacter[]
  setSelectedHouse: Dispatch<SetStateAction<string>>
  setSelectedAncestry: Dispatch<SetStateAction<string>>
}
