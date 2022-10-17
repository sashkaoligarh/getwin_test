import React, { useEffect, useState, useRef } from 'react';
import {
  FilterViewComponent,
  SearchViewComponent,
  PokemonInfoView,
} from './components';
import Pagination from '@mui/material/Pagination';
import './styles.scss';
import { useUrlSearchParams } from '../../hooks';
import CircularIndeterminate from '../../components/CircularProgress';
// import Skeleton from '@mui/material/Skeleton';

const pageCount = 20;

const HomePageView = (props: any) => {
  const isMounted = useRef(false);
  // const isMounted = useMounted();
  const searchParams: any = new URLSearchParams(location.search);

  const [page, setPage] = useState<number>(
    searchParams.get('page') !== undefined ? 1 : searchParams.get('page'),
  );
  const { addQuery } = useUrlSearchParams();
  const {
    setPokemonsList,
    pokemonsList,
    setPokemonInfo,
    pokemonsCount,
    hasNextPage,
    hasPrevPage,
    loadingGetPokemonsList,
  } = props;

  const handleChangePage = (props: any, page: any) => {
    addQuery('page', page);
    setPage(page);
  };

  useEffect(() => {
    if (!isMounted.current) {
      setPokemonsList({
        offset:
          searchParams.get('page') === 1
            ? 0
            : searchParams.get('page') * pageCount,
        limit: pageCount,
      });
    }
    return () => {
      isMounted.current = true;
    };
  }, [page]);
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
          {loadingGetPokemonsList === true ? (
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
