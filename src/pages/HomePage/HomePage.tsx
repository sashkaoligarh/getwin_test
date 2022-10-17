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
import config from '../../config';

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

  const handleChangePage = (props: any, newPage: any) => {
    if (newPage === page) return;
    addQuery('page', newPage);
    setPage(newPage);
    if (isTypesPagination) {
      setPokemonsListByType(currentTypeUrl, computePageData(newPage));
    } else {
      setPokemonsList(computePageData(newPage));
    }
  };

  useEffect(() => {
    if (!isMounted.current && searchParams.get('page') !== null) {
      setPage(+searchParams.get('page'));
    }

    if (isTypesPagination || searchParams.get('type') !== null) {
      setPokemonsListByType(
        `${config.apiUrl}type/${searchParams.get('type')}/`,
        computePageData(+searchParams.get('page')),
      );
    } else {
      setPokemonsList(computePageData(+searchParams.get('page')));
    }
    return () => {
      isMounted.current = true;
    };
  }, []);
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
