
// POKEMON
export interface Pokemon {
  id: number
  name: string
  thumbImg: ThumbImg
}

export interface PokemonDetail extends Pokemon {
  baseStats: BaseStat
  profileStats: ProfileStat
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
export type Profile = "height" | "weight" | "base-experience"

export type BaseStat = {
  [K in StatName]: number;
}
export type ProfileStat = {
  [K in Profile]: number;
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

export type SortBy = "id" | "az" | "za";
