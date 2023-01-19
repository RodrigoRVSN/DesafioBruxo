import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { Main } from '@App/components/Main'
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
        <Main />
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
