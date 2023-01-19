import Image from 'next/image'
import * as S from './styles'

export const EmptyState = () => {
  return (
    <S.Container>
      <Image src="/assets/witch.svg" alt="Not found" width={300} height={500} />
      <S.Feedback>
        Characters not found with this filters, please select another!
      </S.Feedback>
    </S.Container>
  )
}
