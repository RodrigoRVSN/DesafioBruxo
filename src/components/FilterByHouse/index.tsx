import { useCharacters } from '@App/core/hooks/useCharacters'
import { houses } from './FilterByHouse.data'

export const FilterByHouse = () => {
  const { setSelectedHouse } = useCharacters()

  return (
    <select onChange={(event) => setSelectedHouse(event.target.value)}>
      <option value="">Select a house</option>
      <option value="without">Without house</option>

      {houses?.map((house) => (
        <option value={house} key={house}>
          {house}
        </option>
      ))}
    </select>
  )
}
