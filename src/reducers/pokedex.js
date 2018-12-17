export default function postReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_POKEMON':
      return action.pokemons;
    default:
      return state;
  }
}