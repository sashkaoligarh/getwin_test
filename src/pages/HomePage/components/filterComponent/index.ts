import { connect } from 'react-redux';
import FilterViewComponent from './filterView';
import { setPokemonsTypes } from '../../../../redux/actions/pokemonTypesActions';
import {
  setPokemonsListByType,
  setPokemonsList,
} from '../../../../redux/actions/pokemonListActions';
// interface RootState {
//   pokemonsStore: any;
// }

const mapState = (state: any) => ({
  types: state.pokemonTypes.types,
  loadingGetPokemonInfo: state.pokemonTypes.loadingGetPokemonInfo,
});

const mapDispatch = {
  setPokemonsTypes,
  setPokemonsListByType,
  setPokemonsList,
};

const connector = connect(mapState, mapDispatch);

export default connector(FilterViewComponent);
