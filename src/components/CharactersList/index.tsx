import { useCharacters } from '@App/core/hooks/useCharacters'
import * as S from './styles'
import { ButtonLoadMore } from '../ButtonLoadMore'
import { CharacterCard } from '../CharacterCard'
import { FilterByAncestry } from '../FilterByAncestry'

export const CharactersList = () => {
  const { characters } = useCharacters()

  return (
    <S.Container>
      <FilterByAncestry />
      <S.List>
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </S.List>

      <ButtonLoadMore />
    </S.Container>
  )
}
