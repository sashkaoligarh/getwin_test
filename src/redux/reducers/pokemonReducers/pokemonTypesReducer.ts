import { AnyAction } from 'redux';
import {
  GET_POKEMON_TYPES_START,
  GET_POKEMON_TYPES_SUCCESS,
  GET_POKEMON_TYPES_ERR,
} from '../../types';
interface pokemonsState {
  types: any[];
  loadingTypes: boolean;
  errGetTypes: string;
}

const initialState: pokemonsState = {
  types: [],
  loadingTypes: false,
  errGetTypes: '',
};

const pokemonTypesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_POKEMON_TYPES_START:
      return {
        ...state,
        loadingTypes: true,
      };
    case GET_POKEMON_TYPES_SUCCESS:
      return {
        ...state,
        loadingTypes: false,
        types: action.payload,
      };
    case GET_POKEMON_TYPES_ERR:
      return {
        ...state,
        loadingTypes: false,
        errGetTypes: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonTypesReducer;
