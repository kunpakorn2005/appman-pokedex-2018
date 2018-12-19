import axios from 'axios/index';

export const fetchPokemons = (pokemons) => {
  return {
    type: 'FETCH_POKEMON',
    pokemons
  }
};

export const fetchAllPokemons = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3030/api/cards')
      .then(response => {
        dispatch(fetchPokemons(response.data.cards))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchPokemonsByKeyword = (searchText) => {
  return (dispatch) => {
    return axios.get(`http://localhost:3030/api/cards?name=${searchText}`)
      .then(response => {
        dispatch(fetchPokemons(response.data.cards))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const addPokemonsToPokeDex = (myPokemon) => {
  return {
    type: 'ADDED_POKEMON',
    myPokemon
  }
};

export const deletePokemonsFromPokeDex = (myPokemon) => {
  return {
    type: 'DELETE_POKEMON',
    myPokemon
  }
};
