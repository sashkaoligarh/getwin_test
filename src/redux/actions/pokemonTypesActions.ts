import { pokemonSevice } from '../../api';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store';
import {
  GET_POKEMON_TYPES_START,
  GET_POKEMON_TYPES_SUCCESS,
  GET_POKEMON_TYPES_ERR,
} from '../types';

export const setPokemonsTypes = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return (dispatch: any) => {
    dispatch(getListStarted());
    pokemonSevice
      .getPokemonTypes()
      .then((res: any) => {
        dispatch(getTypesSuccess(res.data.results));
      })
      .catch((error: any) => dispatch(getListFailure(error)));
  };
};
const getTypesSuccess = (list: any) => ({
  type: GET_POKEMON_TYPES_SUCCESS,
  payload: list,
});

const getListStarted = () => ({
  type: GET_POKEMON_TYPES_START,
});

const getListFailure = (error: string) => ({
  type: GET_POKEMON_TYPES_ERR,
  payload: {
    error,
  },
});
