import React, { useEffect, useRef } from 'react';
import {
  FilterViewComponent,
  SearchViewComponent,
  PokemonInfoView,
} from './components';
import Pagination from '@mui/material/Pagination';
import './styles.scss';
import { useUrlSearchParams } from '../../hooks';
import { computePageData } from '../../helpers';
import CircularIndeterminate from '../../components/CircularProgress';
import { homeComponentProps } from './index';

const pageCount = 20;

const HomePageView = (props: homeComponentProps) => {
  const isMounted = useRef(false);
  const searchParams: any = new URLSearchParams(location.search);

  const { addQuery } = useUrlSearchParams();
  const {
    setPokemonsList,
    pokemonsList,
    setPokemonInfo,
    pokemonsCount,
    hasNextPage,
    hasPrevPage,
    loadingGetPokemonsList,
    page,
    isTypesPagination,
    setPage,
    setPokemonsListByType,
    currentTypeUrl,
  } = props;

  const handleChangePage = (props: any, page: any) => {
    addQuery('page', page);
    setPage(page);
  };

  useEffect(() => {
    if (!isMounted.current) {
      setPage(
        searchParams.get('page') !== undefined ? 1 : searchParams.get('page'),
      );
    }
    if (isTypesPagination) {
      setPokemonsListByType(
        currentTypeUrl,
        computePageData(+searchParams.get('page')),
      );
    } else {
      setPokemonsList(computePageData(+searchParams.get('page')));
    }
    return () => {
      isMounted.current = true;
    };
  }, [searchParams.get('page')]);
  return (
    <div className="rootContainer">
      <PokemonInfoView />

      <div>
        <div className="filterContainer">
          <div className="selectTypeContainer">
            <SearchViewComponent />
            <div style={{ width: '100%', marginLeft: '20px' }}>
              <FilterViewComponent />
            </div>
          </div>
        </div>
        <div className="body-wrapper">
          {loadingGetPokemonsList ? (
            <div className="pokeWrapper">
              <CircularIndeterminate />
            </div>
          ) : (
            <div className="pokeWrapper">
              {pokemonsList.map((item: any) => (
                <div
                  className="pokeTile"
                  onClick={() => setPokemonInfo(item.url)}
                  key={item.name}>
                  <div>{item.name}</div>
                </div>
              ))}
              {Math.floor(pokemonsCount / pageCount) > 1 ? (
                <div className="pagination">
                  <Pagination
                    color="primary"
                    page={page}
                    count={Math.floor(pokemonsCount / pageCount)}
                    showFirstButton={hasPrevPage}
                    showLastButton={hasNextPage}
                    onChange={handleChangePage}
                  />
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePageView;
