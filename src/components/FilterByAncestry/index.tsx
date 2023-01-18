import { useCharacters } from '@App/core/hooks/useCharacters'
import { ancestries } from './FilterByAncestry.data'

export const FilterByAncestry = () => {
  const { setSelectedAncestry } = useCharacters()

  return (
    <select onChange={(event) => setSelectedAncestry(event.target.value)}>
      <option value="">Select a ancestry</option>
      <option value="without">Unknown ancestry</option>

      {ancestries?.map((ancestry) => (
        <option value={ancestry} key={ancestry}>
          {ancestry}
        </option>
      ))}
    </select>
  )
}
