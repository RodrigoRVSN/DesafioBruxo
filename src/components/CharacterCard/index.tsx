import Image from 'next/image'
import { ICharacter } from '@App/core/types/ICharacters'
import * as S from './styles'

type CharacterCardProps = {
  character: ICharacter
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <S.Container house={character.house} isStudent={character.hogwartsStudent}>
      <Image
        src={character.image || '/assets/default-image.jpg'}
        alt={'Imagem'}
        width={160}
        height={230}
      />

      <span>{character.name}</span>
    </S.Container>
  )
}
