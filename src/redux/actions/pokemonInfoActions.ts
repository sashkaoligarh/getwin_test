import {
  GET_POKEMON_INFO_STARTED,
  GET_POKEMON_INFO_SUCCESS,
  GET_POKEMON_INFO_ERR,
} from '../types';

import { pokemonSevice } from '../../api';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store';

export const setPokemonInfo = (
  url: string,
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch: any) => {
    dispatch(getInfoStarted());
    pokemonSevice
      .getDataByUrl(url)
      .then((res: any) => {
        dispatch(getInfoSuccess(res.data));
      })
      .catch((error: any) => {
        dispatch(getInfoFailure(error.message));
      });
  };
};

const getInfoSuccess = (data: any) => ({
  type: GET_POKEMON_INFO_SUCCESS,
  payload: data,
});

const getInfoStarted = () => ({
  type: GET_POKEMON_INFO_STARTED,
});

const getInfoFailure = (error: string) => ({
  type: GET_POKEMON_INFO_ERR,
  payload: error,
});
