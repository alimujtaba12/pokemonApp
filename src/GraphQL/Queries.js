import { gql } from "@apollo/client";

export const LOAD_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      resistant
      weaknesses
      maxCP
      maxHP
      image
    }
  }
`;
