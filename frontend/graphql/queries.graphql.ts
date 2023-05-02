import { gql } from '@apollo/client'

export const POKEMONS = gql`
    query pokemons {
        pokemons(query: {}) {
            edges {
                id
                name
                types
                image
                isFavorite
            }
        }
    }
`
