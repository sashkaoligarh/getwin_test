import { connect } from 'react-redux';
import SearchViewComponent from './SearchViewComponents';
import { setPokemonInfo } from '../../../../redux/actions/pokemonInfoActions';

// interface RootState {
//   pokemonsStore: any;
// }

const mapState = (state: any) => ({
  types: state.pokemonTypes.types,
  loadingGetInfo: state.pokemonInfo.loadingGetPokemonInfo,
});

const mapDispatch = {
  setPokemonInfo,
};

const connector = connect(mapState, mapDispatch);

export default connector(SearchViewComponent);
