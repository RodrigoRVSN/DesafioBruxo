import { useCharacters } from '@App/core/hooks/useCharacters'
import * as S from './styles'

export const ButtonLoadMore = () => {
  const { onLoadMore } = useCharacters()

  return <S.Button onClick={onLoadMore}>Load more</S.Button>
}
