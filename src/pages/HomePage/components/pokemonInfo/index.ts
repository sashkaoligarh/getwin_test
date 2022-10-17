import { connect } from 'react-redux';
import HomePageView from './pokemonInfoView';

// interface RootState {
//   pokemonsStore: any;
// }

const mapState = (state: any) => ({
  pokemonInfo: state.pokemonInfo.pokemonInfo,
  loadingGetPokemonInfo: state.pokemonInfo.loadingGetPokemonInfo,
  errGetPokeInfo: state.pokemonInfo.errGetPokeInfo,
});

const connector = connect(mapState, {});

export default connector(HomePageView);
