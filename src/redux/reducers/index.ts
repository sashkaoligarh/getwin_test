import { combineReducers } from 'redux';
import pokemonInfoReducer, {
  pokemonInfoState,
} from './pokemonReducers/pokemonInfoReducer';
import pokemonListReducer, {
  pokemonListState,
} from './pokemonReducers/pokemonListReducer';
import pokemonTypesReducer, {
  pokemonTypesState,
} from './pokemonReducers/pokemonTypesReducer';

export interface State {
  pokemonInfo: pokemonInfoState;
  pokemonList: pokemonListState;
  pokemonTypes: pokemonTypesState;
}

export default combineReducers({
  pokemonInfo: pokemonInfoReducer,
  pokemonList: pokemonListReducer,
  pokemonTypes: pokemonTypesReducer,
});
