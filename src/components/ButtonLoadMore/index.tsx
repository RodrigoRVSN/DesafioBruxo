import { useCharacters } from '@App/core/hooks/useCharacters'

export const ButtonLoadMore = () => {
  const { onLoadMore } = useCharacters()

  return <button onClick={onLoadMore}>Load more</button>
}
