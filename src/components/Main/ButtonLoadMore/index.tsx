import { Button } from '@App/components/Button'
import { useCharacters } from '@App/core/hooks/useCharacters'

export const ButtonLoadMore = () => {
  const { onLoadMore, allCharacters, characters } = useCharacters()

  if (characters.length >= allCharacters.length) return null

  return <Button onClick={onLoadMore}>Load more</Button>
}
