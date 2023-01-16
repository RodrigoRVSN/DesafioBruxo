import Image from 'next/image'
import { ICharacter } from '@App/core/types/ICharacters'

type CharacterCardProps = {
  character: ICharacter
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div key={character.id}>
      <Image
        src={character.image || '/assets/default-image.jpg'}
        alt={'Imagem'}
        width={160}
        height={230}
      />

      <span>{character.name}</span>
    </div>
  )
}
