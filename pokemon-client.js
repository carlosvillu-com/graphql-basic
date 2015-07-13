import fetch from 'node-fetch';

const BASE_API = 'http://pokeapi.co';

export async function pokemon({id = 1} = {}){
  var response = await fetch(`${BASE_API}/api/v1/pokemon/${id}`);
  return response.json();
};

export async function descriptions({pokemon = false} = {}){
  return await pokemon.descriptions.map(desc => {
    return fetch(`${BASE_API}${desc.resource_uri}`)
    .then(response => response.json());
  });
};
