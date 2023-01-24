import { useCharacters } from '@App/core/hooks/useCharacters'
import { CharacterCard } from './CharacterCard'
import { EmptyState } from './EmptyState'

export const CharactersList = () => {
  const { characters } = useCharacters()

  return (
    <>
      {characters.length ? (
        characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))
      ) : (
        <EmptyState />
      )}
    </>
  )
}
