import { useCharacters } from '@App/core/hooks/useCharacters'
import { ancestries } from './FilterByAncestry.data'

export const FilterByAncestry = () => {
  const { onFilterByAncestry } = useCharacters()

  return (
    <select onChange={(event) => onFilterByAncestry(event.target.value)}>
      <option value="">No One</option>
      {ancestries?.map((ancestry) => (
        <option value={ancestry} key={ancestry}>
          {ancestry}
        </option>
      ))}
    </select>
  )
}
