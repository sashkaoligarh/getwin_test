import { connect } from 'react-redux';
import HomePageView from './pokemonInfoView';
import { State } from '../../../../redux/reducers';

const mapState = (state: State) => ({
  pokemonInfo: state.pokemonInfo.pokemonInfo,
  loadingGetPokemonInfo: state.pokemonInfo.loadingGetPokemonInfo,
  errGetPokeInfo: state.pokemonInfo.errGetPokeInfo,
});

export interface infoComponentProps {
  pokemonInfo: any;
  loadingGetPokemonInfo: boolean;
  errGetPokeInfo: string;
}
const connector = connect(mapState, {});

export default connector(HomePageView);
