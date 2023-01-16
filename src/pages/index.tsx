import { InferGetStaticPropsType } from 'next'
import { CharactersList } from '@App/components/CharactersList'
import { CharactersProvider } from '@App/core/contexts/CharactersContext'
import { getAllCharacters } from '@App/core/services/getCharacters'

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>

export default function Home({ data }: HomeProps) {
  return (
    <CharactersProvider data={data}>
      <CharactersList />
    </CharactersProvider>
  )
}

export const getStaticProps = async () => {
  const data = await getAllCharacters()

  return {
    props: {
      data
    }
  }
}
