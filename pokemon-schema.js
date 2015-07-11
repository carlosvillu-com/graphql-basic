import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt
} from 'graphql';

import {
  pokemon,
  descriptions
} from './pokemon-client';

/**
 *  Schema definition using shorthands:
 *
 *  type Pokemon {
 *    name: String
 *    defense: Integer
 *    attack: Integer
 *    descriptions: [Description]
 *  }
 *
 *  type Description {
 *    name: String
 *    id: String!
 *    created: String
 *    modified: String
 *    pokemon: Pokemon
 *  }
 *
 *  type Query {
 *    pokemon(id: String): Pokemon
 *    description(id: String): Description
 *  }
 * */

/**
 *  type Description {
 *    name: String
 *    id: String!
 *    created: String
 *    modified: String
 *    pokemon: Pokemon
 *  }
 */
var descriptionType = new GraphQLObjectType({
  name: 'Description',
  description: 'Details about a pokemon',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The id of the description.'
    },
    name: {
      type: GraphQLString,
      description: 'Name of the description.'
    },
    description: {
      type: GraphQLString,
      description: 'The description of the pokemon.'
    },
    modified: {
      type: GraphQLString,
      description: 'Last modified date.'
    },
    created: {
      type: GraphQLString,
      description: 'created date.'
    }
  })
});

/**
 * We define our Pokemon type, which implements the character interface.
 *
 * This implements the following type system shorthand:
 *  type Pokemon {
 *    name: String
 *    defense: Integer
 *    attack: Integer
 *    descriptions: [Description]
 *  }
 */
var pokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  description: 'A little pokemon bug',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'The pokemon name.'
    },
    defense: {
      type: GraphQLInt,
      description: 'Defense value.'
    },
    attack: {
      type: GraphQLInt,
      description: 'attack value.'
    },
    descriptions: {
      type: new GraphQLList(descriptionType),
      description: 'more details informations.',
      resolve: (resource) => descriptions({pokemon: resource})
    }
  })
});

/**
 *  type Query {
 *    pokemon(id: String): Pokemon
 *    description(id: String): Description
 *  }
 */

var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    pokemon: {
      type: pokemonType,
      args: {id: { name: 'id', type: new GraphQLNonNull(GraphQLString)}},
      resolve: (root, {id}) => pokemon({id})
    }
  })
});

export var PokemonSchema = new GraphQLSchema({
  query: queryType
});
