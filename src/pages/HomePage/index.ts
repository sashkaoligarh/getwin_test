import { connect } from 'react-redux';
import HomePageView from './HomePage';
import {
  setPokemonsList,
  setPokemonsListByType,
  setPage,
} from '../../redux/actions/pokemonListActions';
import { setPokemonInfo } from '../../redux/actions/pokemonInfoActions';
import { State } from '../../redux/reducers';

const mapState = (state: State) => ({
  pokemonsList: state.pokemonList.pokemonsList,
  loadingGetPokemonsList: state.pokemonList.loadingGetPokemonsList,
  pokemonsCount: state.pokemonList.pokemonsCount,
  hasNextPage: state.pokemonList.hasNextPage,
  hasPrevPage: state.pokemonList.hasPrevPage,
  page: state.pokemonList.page,
  isTypesPagination: state.pokemonList.isTypesPagination,
  currentTypeUrl: state.pokemonList.currentTypeUrl,
});

const mapDispatch = {
  setPokemonsList,
  setPokemonInfo,
  setPage,
  setPokemonsListByType,
};

interface pageData {
  offset: number;
  limit: number;
}
interface pageData {
  offset: number;
  limit: number;
}
export interface homeComponentProps {
  page: number;
  currentTypeUrl: string;
  isTypesPagination: boolean;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  pokemonsList: any[];
  loadingGetPokemonsList: boolean;
  pokemonsCount: number;
  setPokemonInfo: (url: string) => void;
  setPage: (page: number) => void;
  setPokemonsListByType: (url: string, pageData: pageData) => void;
  setPokemonsList: (pageData: pageData) => void;
}

const connector = connect(mapState, mapDispatch);

export default connector(HomePageView);
