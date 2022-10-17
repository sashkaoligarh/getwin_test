import { combineReducers } from 'redux';
import pokemonInfoReducer from './pokemonReducers/pokemonInfoReducer';
import pokemonListReducer from './pokemonReducers/pokemonListReducer';
import pokemonTypesReducer from './pokemonReducers/pokemonTypesReducer';

export default combineReducers({
  pokemonInfo: pokemonInfoReducer,
  pokemonList: pokemonListReducer,
  pokemonTypes: pokemonTypesReducer,
});
