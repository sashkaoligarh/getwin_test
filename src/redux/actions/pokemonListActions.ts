import {
  GET_POKEMON_LIST_STARTED,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_ERR,
  SET_PAGE,
} from '../types';

import { pokemonSevice } from '../../api';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store';

export const setPokemonsList = (
  pageData: any,
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch: any) => {
    dispatch(getListStarted());
    pokemonSevice
      .getPokemonsList(pageData.limit, pageData.offset)
      .then((res: any) => {
        dispatch(
          getListSuccess({
            ...res.data,
            isTypesPagination: false,
            currentTypeUrl: '',
          }),
        );
      })
      .catch((error: any) => dispatch(getListFailure(error)));
  };
};

export const setPokemonsListByType = (
  url: string,
  pageData: any,
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch: any) => {
    dispatch(getListStarted());
    pokemonSevice
      .getDataByUrl(url)
      .then((res: any) => {
        const data = res.data.pokemon.map((item: any) => item.pokemon);
        dispatch(
          getListSuccess({
            results: data.slice(
              pageData.offset,
              +pageData.limit + +pageData.offset,
            ),
            isTypesPagination: true,
            count: data.length,
            next: true,
            previous: false,
            currentTypeUrl: url,
          }),
        );
      })
      .catch((error: any) => dispatch(getListFailure(error)));
  };
};

const getListSuccess = (list: any) => ({
  type: GET_POKEMON_LIST_SUCCESS,
  payload: list,
});

const getListStarted = () => ({
  type: GET_POKEMON_LIST_STARTED,
});

const getListFailure = (error: string) => ({
  type: GET_POKEMON_LIST_ERR,
  payload: {
    error,
  },
});

export const setPage = (page: number) => ({
  type: SET_PAGE,
  payload: page,
});
