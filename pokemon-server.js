/* eslint no-console:0 */

import {PokemonSchema} from './pokemon-schema';
import { graphql } from 'graphql';

import express from 'express';
import bodyParser from 'body-parser'

const PORT = 8080;

const app = express();

app.use(bodyParser.json());

app.post('/', (req, res, next) => {
  const {query, pokemonId} = req.body;
  graphql(PokemonSchema, query, null, {pokemonId}).then(res.json.bind(res));
});

app.listen(PORT, () => {
  console.log(`Server up and running in port ${PORT}`);
});
