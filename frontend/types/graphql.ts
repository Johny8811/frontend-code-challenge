export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
}

export type Attack = {
    __typename?: "Attack"
    name: Scalars["String"]
    type: Scalars["String"]
    damage: Scalars["Int"]
}

export type Pokemon = {
    __typename?: "Pokemon"
    id: Scalars["ID"]
    number: Scalars["Int"]
    name: Scalars["String"]
    weight: PokemonDimension
    height: PokemonDimension
    classification: Scalars["String"]
    types: Array<Scalars["String"]>
    resistant: Array<Scalars["String"]>
    attacks: PokemonAttack
    weaknesses: Array<Scalars["String"]>
    fleeRate: Scalars["Float"]
    maxCP: Scalars["Int"]
    evolutions: Array<Pokemon>
    evolutionRequirements?: Maybe<PokemonEvolutionRequirement>
    maxHP: Scalars["Int"]
    image: Scalars["String"]
    sound: Scalars["String"]
    isFavorite: Scalars["Boolean"]
}

export type PokemonConnection = {
    __typename?: "PokemonConnection"
    limit: Scalars["Int"]
    offset: Scalars["Int"]
    count: Scalars["Int"]
    edges: Array<Pokemon>
}

export type PokemonsQueryInput = {
    limit?: Maybe<Scalars["Int"]>
    offset?: Maybe<Scalars["Int"]>
    search?: Maybe<Scalars["String"]>
    filter?: Maybe<PokemonFilterInput>
}

export type PokemonFilterInput = {
    type?: Maybe<Scalars["String"]>
    isFavorite?: Maybe<Scalars["Boolean"]>
}

export type PokemonAttack = {
    __typename?: "PokemonAttack"
    fast: Array<Attack>
    special: Array<Attack>
}

export type PokemonDimension = {
    __typename?: "PokemonDimension"
    minimum: Scalars["String"]
    maximum: Scalars["String"]
}

export type PokemonEvolutionRequirement = {
    __typename?: "PokemonEvolutionRequirement"
    amount: Scalars["Int"]
    name: Scalars["String"]
}

export type Query = {
    __typename?: "Query"
    pokemons: PokemonConnection
    pokemonByName?: Maybe<Pokemon>
    pokemonById?: Maybe<Pokemon>
    pokemonTypes: Array<Scalars["String"]>
}

export type QueryPokemonsArgs = {
    query: PokemonsQueryInput
}

export type QueryPokemonByNameArgs = {
    name: Scalars["String"]
}

export type QueryPokemonByIdArgs = {
    id: Scalars["ID"]
}

export type Mutation = {
    __typename?: "Mutation"
    favoritePokemon?: Maybe<Pokemon>
    unFavoritePokemon?: Maybe<Pokemon>
}

export type MutationFavoritePokemonArgs = {
    id: Scalars["ID"]
}

export type MutationUnFavoritePokemonArgs = {
    id: Scalars["ID"]
}

export type Root = {
    __typename?: "Root"
    query: Query
}
