import {
  SET_POKEMONS_TYPE,
  SET_POKEMONS_LIST,
  SET_POKEMON_INFO,
  SET_ERROR_INFO,
} from './types';
import { pokemonSevice } from '../../api';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store';

export const setPokemonsTypes = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return (dispatch: any) => {
    pokemonSevice
      .getPokemonTypes()
      .then((res: any) => {
        dispatch({ type: SET_POKEMONS_TYPE, payload: res.data.results });
      })
      .catch((error: any) =>
        dispatch({ type: SET_ERROR_INFO, payload: error }),
      );
  };
};

export const setPokemonsList = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return (dispatch: any) => {
    pokemonSevice
      .getPokemonsList(10, 0)
      .then((res: any) => {
        dispatch({ type: SET_POKEMONS_LIST, payload: res.data.results });
      })
      .catch((error: any) =>
        dispatch({ type: SET_ERROR_INFO, payload: error }),
      );
  };
};

export function setPokemonInfo(pokemon: any) {
  return { type: SET_POKEMON_INFO, payload: pokemon };
}
