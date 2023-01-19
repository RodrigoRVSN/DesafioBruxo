import Image from 'next/image'
import { ICharacter } from '@App/core/types/ICharacters'
import * as S from './styles'
import { Wand } from './Wand'

type CharacterCardProps = {
  character: ICharacter
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <S.Container house={character.house} isStudent={character.hogwartsStudent}>
      <S.Avatar isAlive={character.alive}>
        <Image
          src={character.image || '/assets/default-image.jpg'}
          alt={`Image of ${character.name}`}
          width={190}
          height={250}
          className="character-card__image--character"
        />
      </S.Avatar>

      <span>{character.name}</span>
      {character.house && <span>House: {character.house}</span>}
      <span>{character.ancestry}</span>

      <Wand wand={character.wand} />
    </S.Container>
  )
}
