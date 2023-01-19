import { ChangeEvent } from 'react'
import { useCharacters } from '@App/core/hooks/useCharacters'
import { ancestries } from './FilterByAncestry.data'
import * as S from '../styles'

export const FilterByAncestry = () => {
  const { setSelectedAncestry } = useCharacters()

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedAncestry(event.target.value)
  }

  return (
    <S.Container onChange={handleOptionChange}>
      <option value="">Select a ancestry</option>
      <option value="without">Unknown ancestry</option>

      {ancestries?.map((ancestry) => (
        <option value={ancestry} key={ancestry}>
          {ancestry}
        </option>
      ))}
    </S.Container>
  )
}
