import { ButtonLoadMore } from './ButtonLoadMore'
import { CharactersList } from './CharactersList'
import { FilterByAncestry } from './Filters/FilterByAncestry'
import { FilterByHouse } from './Filters/FilterByHouse'
import * as S from './styles'

export const Main = () => {
  return (
    <S.Container>
      <S.FiltersContainer>
        <FilterByAncestry />
        <FilterByHouse />
      </S.FiltersContainer>

      <S.List>
        <CharactersList />
      </S.List>

      <ButtonLoadMore />
    </S.Container>
  )
}
