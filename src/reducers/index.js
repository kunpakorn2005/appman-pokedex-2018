import { combineReducers } from 'redux';
import pokemons from './pokedex';
import addPokemons from './addpokedex';

export default combineReducers({
  pokemons,
  addPokemons,
})