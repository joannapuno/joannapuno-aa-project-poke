export const getAllPokemon = async (page = 1, pageSize = 20) => {
  const limit = pageSize
  const offset = (page - 1) * pageSize
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  
  const res = await fetch(url)
  if (!res.ok) throw new Error("Unable to get Pokemon resource")

  const data = await res.json()
  const total = data.count
  const totalPages = Math.ceil(total / pageSize)

  return {
    count: total,
    page,
    pageSize,
    totalPages,
    next: data.next,
    previous: data.previous,
    results: data.results,
  }
}

export const getPokemonByName = async (pokemonName: string) => {
  if (!pokemonName) return
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  if (!res.ok) throw new Error("Unable to get Pokemon resource")
  return res.json()
}
