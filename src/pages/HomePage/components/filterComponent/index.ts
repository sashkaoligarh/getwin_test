import { connect } from 'react-redux';
import FilterViewComponent from './filterView';
import { setPokemonsTypes } from '../../../../redux/actions/pokemonTypesActions';
import {
  setPokemonsListByType,
  setPokemonsList,
  setPage,
} from '../../../../redux/actions/pokemonListActions';
import { State } from '../../../../redux/reducers';

const mapState = (state: State) => ({
  types: state.pokemonTypes.types,
  loadingTypes: state.pokemonTypes.loadingTypes,
});

const mapDispatch = {
  setPokemonsTypes,
  setPokemonsListByType,
  setPokemonsList,
  setPage,
};
interface pageData {
  offset: number;
  limit: number;
}
export interface filterComponentProps {
  types: any[];
  loadingTypes: boolean;
  setPokemonsTypes: () => void;
  setPokemonsListByType: (url: string, pageData: pageData) => void;
  setPokemonsList: (pageData: pageData) => void;
  setPage: (page: number) => void;
}
const connector = connect(mapState, mapDispatch);

export default connector(FilterViewComponent);
