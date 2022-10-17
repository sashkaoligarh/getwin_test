import { connect } from 'react-redux';
import SearchViewComponent from './SearchViewComponents';
import { setPokemonInfo } from '../../../../redux/actions/pokemonInfoActions';
import { State } from '../../../../redux/reducers';

const mapState = (state: State) => ({
  types: state.pokemonTypes.types,
  loadingGetInfo: state.pokemonInfo.loadingGetPokemonInfo,
});

const mapDispatch = {
  setPokemonInfo,
};

export interface searchComponentProps {
  types: any[];
  loadingGetInfo: boolean;
  setPokemonInfo: (url: string) => void;
}
const connector = connect(mapState, mapDispatch);

export default connector(SearchViewComponent);
