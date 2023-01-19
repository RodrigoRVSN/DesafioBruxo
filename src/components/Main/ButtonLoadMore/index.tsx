import { useCharacters } from '@App/core/hooks/useCharacters'
import * as S from './styles'

export const ButtonLoadMore = () => {
  const { onLoadMore, allCharacters, characters } = useCharacters()

  if (characters.length >= allCharacters.length) return null

  return <S.Button onClick={onLoadMore}>Load more</S.Button>
}
