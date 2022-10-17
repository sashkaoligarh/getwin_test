import { AnyAction } from 'redux';
import {
  GET_POKEMON_LIST_STARTED,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_ERR,
} from '../../types';
export interface pokemonsState {
  pokemonsList: any[];
  pokemonInfo: any;
  loadingGetPokemonsList: boolean;
  pokemonsCount: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  errGetPokeList: string;
}

const initialState: pokemonsState = {
  pokemonsList: [],
  pokemonInfo: {},
  loadingGetPokemonsList: false,
  pokemonsCount: 0,
  hasNextPage: false,
  hasPrevPage: false,
  errGetPokeList: '',
};

const pokemonListReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_POKEMON_LIST_STARTED:
      return {
        ...state,
        loadingGetPokemonsList: true,
      };
    case GET_POKEMON_LIST_ERR:
      return {
        ...state,
        loadingGetPokemonsList: false,
        errGetPokeList: action.payload,
      };
    case GET_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loadingGetPokemonsList: false,
        error: null,
        pokemonsList: action.payload.results,
        pokemonsCount: action.payload.count,
        hasNextPage: action.payload.next !== null,
        hasPrevPage: action.payload.previous !== null,
      };
    default:
      return state;
  }
};

export default pokemonListReducer;
