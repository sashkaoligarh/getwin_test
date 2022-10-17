import { connect } from 'react-redux';
import HomePageView from './HomePage';
import { setPokemonsList } from '../../redux/actions/pokemonListActions';
import { setPokemonInfo } from '../../redux/actions/pokemonInfoActions';
// import { pokemonsState } from '../../redux/reducers/pokemonReducers/pokemonInfoReducer';

const mapState = (state: any) => ({
  pokemonsList: state.pokemonList.pokemonsList,
  loadingGetPokemonsList: state.pokemonList.loadingGetPokemonsList,
  pokemonsCount: state.pokemonList.pokemonsCount,
  hasNextPage: state.pokemonList.hasNextPage,
  hasPrevPage: state.pokemonList.hasPrevPage,
});

const mapDispatch = {
  setPokemonsList,
  setPokemonInfo,
};

const connector = connect(mapState, mapDispatch);

export default connector(HomePageView);
