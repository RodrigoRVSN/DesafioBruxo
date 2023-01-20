import { ICharacter } from '@App/core/types/ICharacters'
import * as S from './styles'

export type WandProps = {
  wand: ICharacter['wand']
}

export const Wand = ({ wand }: WandProps) => {
  return (
    <S.Container>
      <p>Wood: {wand.wood || 'Not found'}</p>
      <p>Core: {wand.core || 'Not found'}</p>
      <p>Length: {wand.length || 'Not found'}</p>
    </S.Container>
  )
}
