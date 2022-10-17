import { AnyAction } from 'redux';
import {
  GET_POKEMON_INFO_STARTED,
  GET_POKEMON_INFO_SUCCESS,
  GET_POKEMON_INFO_ERR,
} from '../../types';
export interface pokemonsState {
  pokemonInfo: any;
  loadingGetPokemonInfo: boolean;
  errGetPokeInfo: string;
}

const initialState: pokemonsState = {
  pokemonInfo: {},
  loadingGetPokemonInfo: false,
  errGetPokeInfo: '',
};

const pokemonInfoReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_POKEMON_INFO_SUCCESS:
      return {
        ...state,
        loadingGetPokemonInfo: false,
        errGetPokeInfo: '',
        pokemonInfo: action.payload,
      };
    case GET_POKEMON_INFO_STARTED:
      return { ...state, loadingGetPokemonInfo: true };
    case GET_POKEMON_INFO_ERR:
      return {
        ...state,
        loadingGetPokemonInfo: false,
        errGetPokeInfo: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonInfoReducer;
