import apiClient from './apiClient';

const pokemonSevice = {
  getPokemonTypes: async () => await apiClient.get('type'),
  getPokemonsList: async (limit: number, offset: number) =>
    await apiClient.get(`pokemon?limit=${limit}&offset=${offset}`),
  searchPokemonsByName: async (searchString: string) => await apiClient.get(''),
};

export default pokemonSevice;
