export default function postReducer(state = [], action) {
  switch (action.type) {
    case 'ADDED_POKEMON':
      state.push(action.myPokemon);
      return state;
    case 'DELETE_POKEMON':
      return state.filter(i => i.id !== action.myPokemon.id);
    default:
      return state;
  }
}