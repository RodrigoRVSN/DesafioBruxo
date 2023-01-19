import Image from 'next/image'
import { useRouter } from 'next/router'
import * as S from './styles'
import { Button } from '../Button'

export const PageNotFound = () => {
  const { replace } = useRouter()

  const handleRedirectToHome = () => {
    replace('/')
  }

  return (
    <S.Container>
      <Image src="/assets/witch.svg" alt="Not found" width={300} height={500} />
      <S.Feedback>404! We were not able to access this page</S.Feedback>

      <Button onClick={handleRedirectToHome}>Go to home</Button>
    </S.Container>
  )
}
