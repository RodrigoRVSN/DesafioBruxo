import { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { getAllCharacters } from '@App/core/services/getCharacters'

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>

export default function Home({ data }: HomeProps) {
  const [characteres, setCharacteres] = useState(data)

  const splittedCharacters = characteres.slice(0, 100)

  return (
    <main>
      {splittedCharacters.map((character) => (
        <div key={character.id}>
          <Image
            src={character.image || '/assets/default-image.jpg'}
            alt={'Imagem'}
            width={160}
            height={230}
          />
          <span>{character.name}</span>
        </div>
      ))}
    </main>
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
