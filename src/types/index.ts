
// POKEMON
export interface Pokemon {
  name: string
  thumbImg: ThumbImg
  baseStats: BaseStat[]
  types: PokemonType[]
  abilities: string[]
}
export const POKEMON_TYPES = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
  "unknown",
  "shadow"
] as const

export type PokemonType = typeof POKEMON_TYPES[number]
export type StatName = "hp" | "defense" | "special-defense" | "attack" | "special-attack" | "speed"
export interface BaseStat {
  name: StatName
  value: number
}
export interface ThumbImg {
  default: string
  shiny: string
}

// OTHER
export interface SearchResult {
  name: string
  url: string
}
