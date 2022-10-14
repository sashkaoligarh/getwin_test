import { AnyAction } from 'redux';
import {
  SET_POKEMONS_TYPE,
  SET_POKEMONS_LIST,
  SET_POKEMON_INFO,
  SET_ERROR_INFO,
  CHANGE_LOADING_STATUS,
} from '../actions/types';
interface pokemonsState {
  types: any[];
  pokemonsList: any[];
  pokemonInfo: any;
  loading: boolean;
  error: string;
}

const initialState: pokemonsState = {
  types: [],
  pokemonsList: [],
  pokemonInfo: {},
  loading: false,
  error: '',
};

const pokemonReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_ERROR_INFO:
      return { ...state, error: action.payload };
    case CHANGE_LOADING_STATUS:
      return { ...state, loading: action.payload };
    case SET_POKEMONS_TYPE:
      return { ...state, types: action.payload };
    case SET_POKEMONS_LIST:
      return { ...state, pokemonsList: action.payload };
    case SET_POKEMON_INFO:
      return { ...state, pokemonInfo: action.payload };
    default:
      return state;
  }
};

export default pokemonReducer;
