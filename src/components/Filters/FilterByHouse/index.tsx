import { ChangeEvent } from 'react'
import { useCharacters } from '@App/core/hooks/useCharacters'
import { houses } from './FilterByHouse.data'
import * as S from '../styles'

export const FilterByHouse = () => {
  const { setSelectedHouse } = useCharacters()

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedHouse(event.target.value)
  }

  return (
    <S.Container onChange={handleOptionChange}>
      <option value="">Select a house</option>
      <option value="without">Without house</option>

      {houses?.map((house) => (
        <option value={house} key={house}>
          {house}
        </option>
      ))}
    </S.Container>
  )
}
