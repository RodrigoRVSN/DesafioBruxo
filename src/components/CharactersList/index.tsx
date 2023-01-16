import { useCharacters } from '@App/core/hooks/useCharacters'
import * as S from './styles'
import { ButtonLoadMore } from '../ButtonLoadMore'
import { CharacterCard } from '../CharacterCard'

export const CharactersList = () => {
  const { characters } = useCharacters()

  return (
    <S.Container>
      <S.List>
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </S.List>

      <ButtonLoadMore />
    </S.Container>
  )
}
