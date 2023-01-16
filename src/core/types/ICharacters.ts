export interface IWand {
  wood: string
  core: string
  length?: number
}

export interface ICharacter {
  id: string
  name: string
  alternate_names: string[]
  species: string
  gender: string
  house: 'Gryffindor' | 'Ravenclaw' | 'Hufflepuff' | 'Slytherin'
  dateOfBirth: string
  yearOfBirth?: number
  wizard: boolean
  ancestry: string
  eyeColour: string
  hairColour: string
  wand: IWand
  patronus: string
  hogwartsStudent: boolean
  hogwartsStaff: boolean
  actor: string
  alternate_actors: string[]
  alive: boolean
  image: string
}
