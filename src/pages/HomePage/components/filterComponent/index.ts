import { connect } from 'react-redux';
import FilterViewComponent from './filterView';
import { setPokemonsTypes } from '../../../../redux/actions/pokemonActions';
interface RootState {
  pokemonsList: any[];
}

const mapState = (state: RootState) => ({
  pokemonsList: state.pokemonsList,
});

const mapDispatch = {
  setPokemonsTypes,
};

const connector = connect(mapState, mapDispatch);

export default connector(FilterViewComponent);
