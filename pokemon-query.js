import {PokemonSchema} from './pokemon-schema';
import { graphql } from 'graphql';

const query = `
  query PokemonQuery($pokemonId: String!) {
    pokemon(id: $pokemonId) {
      name
      defense
      attack
      descriptions {
        description
      }
    }
  }
`;

graphql(PokemonSchema, query, null, {pokemonId: 7}).then(result => console.log(JSON.stringify(result)));

