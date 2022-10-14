import { connect } from 'react-redux';
import HomePageView from './HomePage';
import { setPokemonsList } from '../../redux/actions/pokemonActions';
interface RootState {
  pokemonsList: any[];
}

const mapState = (state: RootState) => ({
  pokemonsList: state.pokemonsList,
});

const mapDispatch = {
  setPokemonsList,
};

const connector = connect(mapState, mapDispatch);

export default connector(HomePageView);
