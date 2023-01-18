import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { CharactersList } from '@App/components/CharactersList'
import { CharactersProvider } from '@App/core/contexts/CharactersContext'
import { getAllCharacters } from '@App/core/services/getCharacters'

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>

export default function Home({ data }: HomeProps) {
  return (
    <>
      <Head>
        <title>Harry Potter - Characters List</title>
      </Head>

      <CharactersProvider initialData={data}>
        <CharactersList />
      </CharactersProvider>
    </>
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
