export type PokemonListItem = {
    id: string,
    name: string,
    types: string[]
    image: string
    isFavorite: boolean
}

export type PokemonsList = PokemonListItem[]
