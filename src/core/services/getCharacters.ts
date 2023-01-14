import type { ICharacter } from '../types/ICharacters'

const API_URL = 'https://hp-api.onrender.com/api/characters'

export const getAllCharacters = async (): Promise<ICharacter[]> => {
  const response = await fetch(API_URL)

  return response.json()
}
