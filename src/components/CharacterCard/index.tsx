import Image from 'next/image'
import { ICharacter } from '@App/core/types/ICharacters'
import * as S from './styles'

type CharacterCardProps = {
  character: ICharacter
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <S.Container house={character.house} isStudent={character.hogwartsStudent}>
      <S.Avatar isAlive={character.alive}>
        <Image
          src={character.image || '/assets/default-image.jpg'}
          alt={'Imagem'}
          width={180}
          height={250}
        />
      </S.Avatar>

      <span>{character.name}</span>
      {character.house && <span>House: {character.house}</span>}
      <span>{character.ancestry}</span>
    </S.Container>
  )
}
