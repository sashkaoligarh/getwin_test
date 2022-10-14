import { AnyAction } from 'redux';
interface pokemonsState {
  types: any[];
}

const initialState: pokemonsState = {
  types: [],
};

const pokemonReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default pokemonReducer;
