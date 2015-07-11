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

var IntrospectionQuery = `
  query IntrospectionTypeQuery {
    __schema {
      types {
        name
      }
    }
  }
`;


(async function MultiQueries(){

  const pokemon = await graphql(PokemonSchema, query, null, {pokemonId: 7});
  const intropection = await graphql(PokemonSchema, IntrospectionQuery);

  console.log(JSON.stringify({
    pokemon,
    intropection
  }));

}());
