import { AnyAction } from 'redux';
import {
  GET_POKEMON_LIST_STARTED,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_ERR,
  SET_PAGE,
} from '../../types';
export interface pokemonListState {
  pokemonsList: any[];
  pokemonInfo: any;
  loadingGetPokemonsList: boolean;
  pokemonsCount: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  errGetPokeList: string;
  page: number;
  isTypesPagination: boolean;
  currentTypeUrl: string;
}

const initialState: pokemonListState = {
  pokemonsList: [],
  pokemonInfo: {},
  loadingGetPokemonsList: false,
  pokemonsCount: 0,
  hasNextPage: false,
  hasPrevPage: false,
  errGetPokeList: '',
  page: 1,
  isTypesPagination: false,
  currentTypeUrl: '',
};

const pokemonListReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_POKEMON_LIST_STARTED:
      return {
        ...state,
        loadingGetPokemonsList: true,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
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
        isTypesPagination: action.payload.isTypesPagination,
        pokemonsCount: action.payload.count,
        hasNextPage: action.payload.next !== null,
        hasPrevPage: action.payload.previous !== null,
        currentTypeUrl: action.payload.currentTypeUrl,
      };
    default:
      return state;
  }
};

export default pokemonListReducer;
