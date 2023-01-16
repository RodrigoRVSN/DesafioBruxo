import Image from 'next/image'
import { useCharacters } from '@App/core/hooks/useCharacters'

export const CharactersList = () => {
  const { characters } = useCharacters()

  return (
    <main>
      {characters.map((character) => (
        <div key={character.id}>
          <Image
            src={character.image || '/assets/default-image.jpg'}
            alt={'Imagem'}
            width={160}
            height={230}
          />
          <span>{character.name}</span>
        </div>
      ))}
    </main>
  )
}
